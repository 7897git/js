
            if (p2pml.hlsjs.Engine.isSupported()) {
                var engine = new p2pml.hlsjs.Engine();

                var player = new Clappr.Player({
                    parentId: "#video",
                    source: "https://firebasestorage.googleapis.com/v0/b/blog-daffadev.appspot.com/o/vid%2Fambulances.mp4?alt=media&token=2ebfc899-0174-4757-b0ed-33055487c21b",
                    playback: {
                        hlsjsConfig: {
                            liveSyncDurationCount: 7,
                            loader: engine.createLoaderClass(),
                        },
                    },
                });

                p2pml.hlsjs.initClapprPlayer(player);

                player.setVolume(100);
                player.play();
            } else {
                document.write("Not supported :(");
            }
