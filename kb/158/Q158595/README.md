---
layout: page
title: "Q158595: Mac Encarta 97: Readme.txt: Memory Use"
permalink: /kb/158/Q158595/
---

## Q158595: Mac Encarta 97: Readme.txt: Memory Use

{% raw %}

	Article: Q158595
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article contains the Memory section of the Microsoft Encarta 97
	Encyclopedia Readme.txt file and discusses ways to optimize memory usage for
	Encarta.
	
	MORE INFORMATION
	================
	
	Readme File:
	
	-----------------
	
	Encarta 97 Encyclopedia will run on any Macintosh with 8 MB of RAM.
	However, if 4,352K of memory are not free when you launch the
	application, a warning message will be displayed indicating there is
	insufficient memory available.
	
	TIPS ON FREEING MEMORY
	----------------------
	Most users with 8 MB of RAM will not experience problems, but if your
	system software takes more than 3,840K, you may need to adjust memory
	usage to make Encarta run properly. Some general suggestions follow:
	
	TURN ON VIRTUAL MEMORY.
	  Virtual Memory allows you to increase the amount of available
	  memory by using space on your hard disk to simulate RAM. Although
	  using virtual memory may slow down overall performance, the extra
	  available memory will allow applications like Encarta to be
	  allocated more memory on launch or allow more applications to run
	  simultaneously. To turn on Virtual Memory, open the Memory control
	  panel, switch the Virtual Memory radio button to On, and then
	  restart your computer. You may also wish to investigate third-party
	  virtual memory utilities, such as RAM Doubler from Connectix
	  Corporation.
	
	  NOTE: Enabling Virtual Memory actually reduces the overall memory
	  requirements and launch time for large native Power Macintosh
	  applications like Encarta. For this reason, most Power Macintosh
	  users will want to enable Virtual Memory. If you wish to take
	  advantage of the increased memory available to applications, Apple
	  recommends setting Virtual Memory to 50% more than the amount of
	  physical RAM. To maximize performance, you should set Virtual
	  Memory to the minimum amount of 1 MB more than physical RAM. If you
	  choose to disable Virtual Memory on your Power Macintosh, be aware
	  that the system will automatically raise Encarta's memory
	  requirements by 5,480K.
	
	RUN ONLY ONE APPLICATION AT A TIME.
	  If other applications are running, close them and then relaunch
	  Encarta.
	
	SWITCH TO 256 COLORS.
	  Running in Millions or Thousands of colors requires more memory to
	  display images in Encarta.
	
	REDUCE THE AMOUNT OF MEMORY BEING USED BY YOUR SYSTEM SOFTWARE.
	  To do this, return to the Finder and select About This Macintosh
	  from the Apple menu. The Largest Unused Block needs to be greater
	  than 4,352K to run Encarta. If the only item listed in the About
	  This Macintosh dialog is System Software and the Largest Unused
	  Block is less than 4,352K, you need to reduce the amount of memory
	  consumed by your system software. Refer to your Macintosh
	  documentation for details on how to do this, but some general
	  suggestions follow:
	
	  a. Open the Memory Control Panel and check the Disk Cache setting.
	  To maximize the memory available to Encarta and other
	  applications, reduce the cache to 96K or less. For more details on
	  Disk Cache settings, check the PERFORMANCE section.
	
	  b. Remove unused fonts and sounds. Be careful when removing fonts
	  however, as some applications may not work properly if the correct
	  fonts are not available. Encarta 97 Encyclopedia requires the
	  following fonts: Arial, Times New Roman, Symbol, MS Reference, and
	  HM Phonetic.
	
	  c. Third-party system extensions such as screen savers, fax
	  software, desktop pictures, menu-modifying utilities, and other
	  system enhancements increase the amount of memory used by your
	  system software. Removing some or all of these extensions will
	  increase the amount of memory available to applications. Be sure
	  that you save anything you remove from your System Folder and place
	  it in a separate folder on your disk so that you can replace it
	  later. Apple's Extension Manager (included with System 7.5 and
	  later) or an equivalent third-party utility can be useful for this
	  purpose. You must restart your computer for changes of this type to
	  take effect.
	
	LOW MEMORY SYMPTOMS AND SOLUTIONS
	---------------------------------
	
	The following are examples of some typical low memory symptoms and
	possible solutions to these problems:
	
	SYMPTOM: ERROR MESSAGE READING, "YOU ARE LOW ON FREE SYSTEM MEMORY."
	
	REASON: Some system components used by Encarta Encyclopedia require free
	system memory. This is the amount of free memory left available by your
	system, Encarta Encyclopedia, and any other applications you may be
	running. This memory can be used by system components like QuickTime,
	QuickTime VR, Sound Manager, Apple Guide and Desktop Printing, or used
	to launch additional applications like Internet Config and your Web
	browser. You can determine the amount of free system memory available
	while running Encarta by switching to the Finder and selecting the
	"About this Macintosh" item under the Apple menu. Largest Unused Block
	tells you how much memory is free for the system's use.
	
	SOLUTION: Turn on Virtual Memory. Virtual Memory allows you to increase
	the amount of available memory so that Encarta can be allocated its
	preferred memory allocation of 6,144K on launch and still leave free
	memory for the system. To turn on Virtual Memory, open the Memory
	control panel, switch the Virtual Memory radio button to On, and then
	restart your computer.
	
	WARNING: Reducing the preferred size for Encarta's memory requirements
	may cause the program to perform poorly. For example, Encarta may not
	be able to play video clips, open collages or enlarge images if it runs
	out of memory. If you allocate less than 4,352K, these problems are
	likely to result.
	
	SYMPTOM: INCORRECT OR ODDLY-SIZED CHARACTERS DISPLAYED IN ARTICLE TEXT.
	
	REASON: Encarta uses a variety of fonts to display special characters
	within article text. If there is not enough memory to load one of these
	fonts, the Macintosh uses font substitution to attempt a "best fit" from
	a font that is already available in memory. Encarta 97 Encyclopedia
	requires the following fonts: Arial, Times New Roman, Symbol, MS
	Reference, and HM Phonetic.
	
	SOLUTION: First check to see if the correct fonts are located in your
	System Folder. If they are missing, reinstall Encarta 97 Encyclopedia
	from Encarta 97 Disc 1. If all the required fonts are properly
	installed, there may be inadequate free system memory for the custom
	fonts to be displayed. In this situation, try the techniques described
	above to increase free system memory.
	
	SYMPTOM: WHEN ENLARGING AN IMAGE, I GET AN EMPTY BOX OR AN ERROR
	MESSAGE READING, "UNABLE TO LOAD IMAGE."
	
	REASON: A single image needs up to 300K of memory to display in 256 color
	mode and 900K in Millions of colors. If the enlarged image also has
	sound that plays with it, even more memory is required.
	
	SOLUTION: Close any extra windows, list boxes or minimized features
	you may have open (More Info, Outline, Pinpointer, MindMaze, Collages,
	etc.) and try again. If this has no effect, you can quit and relaunch
	Encarta or try any of the tips described earlier in this section to
	free up more memory for the Encarta application.
	
	SYMPTOM: WHEN PRINTING, PAGES ARE BLANK OR PARTIAL PAGES ARE PRINTED.
	
	REASON: Printing requires creating a duplicate layout for the printer
	since it has different margins than the screen. Some of the articles in
	Encarta Encyclopedia are thousands of words long and having two copies
	of a long article or large image in memory at the same time can use up
	all of the available memory.
	
	SOLUTION: Close any extra windows, list boxes or minimized features
	you may have open (More Info, Outline, Pinpointer, MindMaze, Collages,
	etc.) and try again. If this has no effect, you can quit and relaunch
	Encarta or try any of the tips described earlier in this section to free
	up more memory for the Encarta application. One way to work around a
	printing problem is to copy the topic to the clipboard, quit Encarta,
	then paste it into your word processing program and print from there.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm macmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1997Mac
	Version           : :1997 edition
	
	=============================================================================
	

{% endraw %}
