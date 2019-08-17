function defaultTask(cb) {
    // place code for your default task here
    console.log(`Gulp has been successsfully loaded.
    Default Tasks Starting`);
    cb();
    console.log(`Default Task Complete`)
  }
  
  exports.default = defaultTask