---
layout: page
title: "Q273620: How to Optimize Performance in Flight Simulator 98/2000 Games"
permalink: /kb/273/Q273620/
---

## Q273620: How to Optimize Performance in Flight Simulator 98/2000 Games

	Article: Q273620
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): fsim kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to optimize game performance in Microsoft Flight
	Simulator 98 and Microsoft Flight Simulator 2000.
	
	MORE INFORMATION
	================
	
	To optimize performance in Flight Simulator 98 and Flight Simulator 2000, find a
	balance between the number of sound and display features you enable and the
	frame rate you can maintain. The frame rate is the speed at which images or
	frames are drawn on the screen, and is often measured in frames per second
	(fps). The appearance of realistic motion improves as the frame rate increases.
	
	Performance in Flight Simulator 98 and Flight Simulator 2000 depends on both the
	features that you select and the configuration of your computer. A set of
	features that you select on one computer may not result in the same level of
	performance as an identical set of features on a different computer.
	
	A computer that has a fast Pentium processor, sufficient memory, a 3D video
	accelerator card, and more recent device drivers can maintain a higher level of
	performance than a computer that barely meets the minimum system requirements.
	
	To optimize performance in Flight Simulator 98 and Flight Simulator 2000, you
	must optimize your hardware configuration, configure Flight Simulator for the
	best performance, and then monitor the frame rate when you select your preferred
	features and settings.
	
	To do this, use the following methods.
	
	Quit Unnecessary Programs
	-------------------------
	
	To increase the amount of available system resources, quit all unnecessary
	programs that are running on your computer before you start Flight Simulator 98
	or Flight Simulator 2000.
	
	To quit all unnecessary programs, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 95 or Microsoft Windows 98:
	
	1. Press CTRL+ALT+DELETE.
	
	2. In the Close Program dialog box, click any program except Explorer or Systray
	  (which are components of Microsoft Windows), and then click End Task.
	
	  If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	3. Repeat steps 1 and 2 to quit all unnecessary programs that are running on
	  your computer.
	
	Microsoft Windows 2000:
	
	1. Press CTRL+SHIFT+ESC.
	
	2. On the Applications tab, click any program, and then click End Task.
	
	  Repeat this step to quit all unnecessary programs that are running on your
	  computer.
	
	3. Quit Windows Task Manager.
	
	NOTE: Some programs start automatically every time you restart your computer. For
	information about how to disable these programs, see the printed or online
	documentation for the program.
	
	Optimize Your Hardware Configuration
	------------------------------------
	
	To optimize your hardware configuration:
	
	1. Contact your video hardware manufacturer to inquire about how to obtain and
	  install the latest version of the video driver for your video adapter.
	
	2. Contact your audio hardware manufacturer to inquire about how to obtain and
	  install the latest version of the sound driver for your sound card.
	
	Set the display color palette to the lowest setting that is supported by the
	game:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors or Color Palette box, click 256 Colors for Flight Simulator 98
	  or High Color (16-bit) for Flight Simulator 2000.
	
	5. Click OK.
	
	6. If you are prompted to restart the computer, click Yes.
	
	Configure the Program for the Best Performance
	----------------------------------------------
	
	To configure Flight Simulator 98 or Flight Simulator 2000 for the best
	performance:
	
	1. Disable stereo sound and reduce the audio sample rate in the program. To do
	  this:
	
	  a. Quit Flight Simulator.
	
	  b. Click Start, point to Programs, point to Accessories,and then click
	     Notepad.
	
	  c. On the File menu, click Open.
	
	  d. Type the appropriate line (including the quotation marks) for the version
	     of Flight Simulator that you want to optimize, and then click OK
	
	     Flight Simulator 98:
	
	  "<drive>:\Program Files\Microsoft Games\Flight Simulator\Fltsim98.cfg"
	
	     where <drive> is the letter of the hard disk on which Flight
	     Simulator is installed.
	
	  e. Type the following lines, pressing ENTER after you type each line, and
	     then press ENTER again after you type the last line:
	
	  [SOUND]
	  Channels=1
	  SamplesPerSec=11025
	
	  f. On the File menu, click Save.
	
	  g. On the File menu, click Exit.
	
	     NOTE: To restore stereo sound, type a SEMICOLON (;) at the beginning of the
	     Channels=1 line. To restore the default audio sample rate, type a
	     SEMICOLON (;) at the beginning of the SamplesPerSec=11025 line.
	
	2. Disable weather options in Flight Simulator 98 or Flight Simulator 2000. To
	  do this:
	
	  a. Start Flight Simulator, and then click Fly Now.
	
	  b. On the World menu, click Weather.
	
	  c. To optimize Flight Simulator 2000, click Clear All Weather.
	
	     To optimize Flight Simulator 98, click Clear in the Clouds box, and then
	     click None in the Wind box.
	
	  d. Click OK.
	
	3. Reduce scenery complexity and display preferences in Flight Simulator 98 or
	  Flight Simulator 2000 to their minimum settings. To do this, use the
	  appropriate method for your version of Flight Simulator.
	
	Flight Simulator 2000:
	
	  a. On the Options menu, point to Settings, and then click Display.
	
	  b. On the Hardware tab, click to clear the Enable Hardware Acceleration check
	     box.
	
	     NOTE: Hardware acceleration may affect performance in different ways,
	     depending on the video adapter that is installed in the computer. If you
	     disable hardware acceleration in Flight Simulator 2000, performance may
	     improve with some video adapters, and it may decline with other video
	     adapters. If the Enable Hardware Acceleration check box is unavailable,
	     your video adapter may not support 3D hardware acceleration. Contact your
	     hardware manufacturer for more information.
	
	  c. Click the Low Resolution Mode check box.
	
	  d. In the Resolution box, click 640x480x16.
	
	  e. Click the Image Quality tab.
	
	  f. Move the Overall Image Quality slider all the way to the left (the 1
	     position).
	
	  g. Click the CHECK MARK button to return to the cockpit.
	
	  h. On the Options menu, point to Settings, and then click Instrument.
	
	  i. Click to clear the Allow For Non-Rectangular Panel Windows check box.
	
	  j. Click the CHECK MARK button to return to the cockpit.
	
	  k. Press ALT+ENTER to switch Flight Simulator 2000 from Window mode to Full
	     Screen mode.
	
	Flight Simulator 98:
	
	  a. On the World menu, click Scenery Complexity.
	
	  b. In the Image Complexity box, click Very Sparse.
	
	  c. In the Scenery Frequency box, click Very Sparse.
	
	  d. Click to clear all selected check boxes.
	
	  e. Click OK.
	
	  f. On the Options menu, click Preferences.
	
	  g. On the Instrument tab, click to clear the Allow For Non-Rectangular Panel
	     Windows check box.
	
	  h. In the Performance Mode box on the Display tab, click 486 Maximum
	     Performance Low Res.
	
	  i. Click Display Options.
	
	  j. Click to clear all selected check boxes on the Aircraft, Map, and Scenery
	     tabs.
	
	  k. On the Hardware Acceleration tab, click to clear the Enable Hardware
	     Acceleration check box.
	
	     NOTE: Hardware acceleration may affect performance in different ways,
	     depending on the video adapter that is installed in the computer. If you
	     disable hardware acceleration in Flight Simulator 2000, performance may
	     improve with some video adapters, and it may decline with other video
	     adapters. If the Enable Hardware Acceleration check box is unavailable,
	     your video adapter may not support 3D hardware acceleration. Contact your
	     hardware manufacturer for more information.
	
	  l. In the Fullscreen Mode box, click 320x200x8.
	
	  m. Click OK until you return to the cockpit.
	
	  n. Press ALT+ENTER to switch Flight Simulator from Window mode to Full Screen
	     mode.
	
	Download the Update 2.0b Patch (Flight Simulator 2000 Only)
	-----------------------------------------------------------
	
	Download and install the Flight Simulator 2000 Update 2.0b patch for your version
	of Flight Simulator 2000. This patch can improve game performance.
	
	The Flight Simulator 2000 Update 2.0b patch is available as a free download from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/games/fs2000/downloads_fs2000update.asp
	
	NOTE: There are two patches available for download. One version is for Flight
	Simulator 2000 Basic and the other is for Flight Simulator 2000 Professional. If
	the wrong version of the patch is installed then the game may no longer run and
	it may necessary to uninstall and reinstall the game to resolve the issue.
	
	Enable Features or Increase Settings in the Program
	---------------------------------------------------
	
	To finish optimizing performance in Flight Simulator 98 or Flight Simulator 2000,
	use the previous methods to enable features or increase settings one at a time.
	Start with your favorite features, and stop before the minimum frame rate
	decreases to a level that you consider unacceptable. To display the frame rate,
	press and hold down SHIFT as you press Z twice.
	
	NOTE: The frame rate in Full Screen mode is faster than the frame rate in Window
	mode. If you want to enable more features in Flight Simulator, switch to Full
	Screen mode. To switch between Full Screen mode and Window mode, press
	ALT+ENTER.
	
	Additional query words: msgame flightsim fltsim fs98 fs2000 fs2k
	
	======================================================================
	Keywords          : fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
