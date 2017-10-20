---
layout: page
title: "Q314225: FS2002: How to Optimize Game Performance"
permalink: /kb/314/Q314225/
---

## Q314225: FS2002: How to Optimize Game Performance

{% raw %}

	Article: Q314225
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you how to configure Microsoft Flight Simulator 2002 and your
	computer for optimal game performance.
	
	MORE INFORMATION
	================
	
	To configure Flight Simulator 2002 and your computer for optimal game
	performance, use the following methods in the order in which they are
	presented.
	
	Check Your Hard Drive for Errors
	--------------------------------
	
	To check your hard drive for errors, use one of the following tools.
	
	ScanDisk:
	
	ScanDisk for Windows (Scandskw.exe) is a disk-checking and repair tool. ScanDisk
	works with Microsoft Windows 95, Microsoft Windows 98, and Microsoft Windows
	Millennium. ScanDisk checks the integrity of your media (including hard disks
	and floppy disks), and ScanDisk repairs most problems.
	
	If you want ScanDisk to repair most errors without prompting you, click to select
	the Automatically Fix Errors check box.
	
	To run ScanDisk, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click ScanDisk.
	
	2. Select the options and features that you want to use, and then click Start.
	
	Chkdsk:
	
	Chkdsk is a command-line tool for Microsoft Windows NT, Microsoft Windows 2000,
	and Microsoft Windows XP. Chkdsk scans volumes on the hard disk and repairs
	physical problems, such as bad blocks. Chkdsk also repairs logical structure
	errors, such as lost clusters, cross-linked files, or directory errors.
	
	NOTE: Run Chkdsk from a command prompt rather than from Windows Explorer. When
	you run Chkdsk from a command prompt, Chkdsk is displayed correctly.
	
	To run Chkdsk from a command prompt, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "cmd" (without the quotation marks), and then press the
	  Enter key.
	
	3. To display the status of the disk in the current drive or volume, type the
	  following at the command prompt
	
	  chkdsk <drive>
	
	  where <drive> is the letter of the drive or volume that you want to
	  check.
	
	4. Press ENTER.
	
	NOTE: For more information about how to run Chkdsk, consult the online Help in
	Windows NT, Windows 2000, or Windows XP.
	
	Defragment Your Hard Drive
	--------------------------
	
	When a program is installed on your computer, the program's files may be stored
	in multiple, noncontiguous locations on your hard disk. This is called
	fragmentation. If your hard disk is fragmented, programs on your computer
	perform slowly.
	
	The Disk Defragmenter tool optimizes the performance of your computer by
	reorganizing the files on your hard disk into contiguous blocks. When the Disk
	Defragmenter tool completes the defragmentation of files on your hard disk, the
	performance of your programs is faster because the files are arranged close
	together.
	
	NOTE: You can use your computer while Disk Defragmenter is running. However, your
	computer operates slowly, and the defragmentation process restarts if the
	contents of the drive that you are defragmenting change.
	
	To run the Disk Defragmenter tool, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Defragmenter.
	
	2. Click the drive that you want to defragment, click OK, and then click Yes.
	
	Disable the Weather Options
	---------------------------
	
	During a flight, you can also disable the weather options to increase frame-rate
	performance. To do this:
	
	1. While in a flight, click World on the menu bar, and then click Weather.
	
	2. Click "Clear all weather".
	
	3. Click Yes, and then click OK.
	
	Quit Unnecessary Programs
	-------------------------
	
	To increase the amount of available system resources, quit all unnecessary
	programs before you start Flight Simulator 2002.
	
	To quit all unnecessary programs, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Press CTRL+ALT+DELETE.
	
	2. In the Close Program dialog box, click any program except Explorer or Systray
	  (which are components of Microsoft Windows), and then click End Task.
	
	  If you receive a message that states that the program is busy or not
	  responding, click End Task again.
	
	3. Repeat steps 1 and 2 to quit all unnecessary programs that are running on
	  your computer.
	
	Microsoft Windows 2000 or Windows XP:
	
	1. Press CTRL+SHIFT+ESC.
	
	2. On the Applications tab, click any program, and then click End Task.
	
	  Repeat this step to quit all unnecessary programs that are running on your
	  computer.
	
	3. Quit Windows Task Manager.
	
	NOTE: Some programs start automatically every time that you restart your
	computer. For information about how to quit these programs, see the printed or
	online documentation for the program.
	
	For additional information about how to quit programs by using clean-boot
	methods, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Optimize Your Hardware Configuration
	------------------------------------
	
	NOTE: Before you attempt to configure your video hardware, please read the
	following Microsoft Knowledge Base article:
	
	  Q309638 Flight Simulator 2002: Known Video-Related Issues
	
	Update Your Video or Sound Card Drivers:
	
	1. Contact your video hardware manufacturer to inquire about how to obtain and
	  install the latest version of the video driver for your video adapter.
	
	2. Contact your audio hardware manufacturer to inquire about how to obtain and
	  install the latest version of the sound driver for your sound card.
	
	For information about how to contact your video or sound card manufacturer, click
	the appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Configure Your Display Adapter:
	
	If updating the video drivers does not help, change the display settings. Set the
	display color palette to the lowest setting that is supported by the game. To do
	this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors box or the Color Palette box, click High Color (16-bit).
	
	5. Click OK.
	
	6. If you are prompted to restart the computer, click Yes.
	
	Change Installation Options
	---------------------------
	
	There are three types of installation: Complete, Compact, and Custom. All of
	these installations use cabinet files (.cab files). A .cab file is a single file
	that stores compressed files in a file library. "Cabbed" files are compressed
	files; they are stored inside .cab files.
	
	Complete Installation:
	
	The Complete installation is the default installation. It is a full installation
	of all files. All compressed scenery files are decompressed after they are
	copied to the drive. This option requires approximately 2.1 gigabytes (GB) of
	free space and an additional 400 to 500 megabytes (MB) of space in which to
	decompress the compressed files.
	
	Compact Installation:
	
	A Compact installation requires approximately 700 MB of free space. It should
	only be chosen if there are no other options available to you, including the
	smallest possible Custom installation. All Scenery is left in a compressed
	format (in a .cab file) on the CDs. There is an impact on performance, due to
	the necessity of decompressing and copying those scenery files to the hard
	drive.
	
	Custom Installation:
	
	When you do a Custom installation, some scenery files remain compressed. You can
	choose how many scenery files you want to decompress. The more scenery files
	that are copied to the drive and decompressed, the better the performance is in
	those areas of the game. Scenery remains compressed on the CD or the hard drive
	performs slowly, exhibits stuttering, and may require disk-swapping when you
	move from region to region in the game.
	
	If you want to increase or decrease the size of your Custom installation, or if
	you want to change between compressed and uncompressed scenery, you need to
	uninstall and reinstall the game.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	REFERENCES
	==========
	
	For additional information about how to optimize video performance in Flight
	Simulator, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q314652 Flight Simulator: How to Optimize Video Performance
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
