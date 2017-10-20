---
layout: page
title: "Q152399: MPI: MS WINDOWS 95 STARTS HERE Corrections and Comments"
permalink: /kb/152/Q152399/
---

## Q152399: MPI: MS WINDOWS 95 STARTS HERE Corrections and Comments

{% raw %}

	Article: Q152399
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 95 Starts Here ISBN 1-55615-862-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Microsoft Windows 95 Starts Here."
	
	The following topics are covered:
	
	- Support policy for "Microsoft Windows 95 Starts Here"
	
	- Error 102: "Setup is unable to find a compressed library file..."
	
	- Installation instructions don't appear after inserting CD-ROM
	
	- Audio or video missing or not operating
	
	- Hourglass stops responding after initial "Starts Here" screen presented
	
	- Computer stops responding after pressing button on the Contents screen
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	Support policy for "Microsoft Windows 95 Starts Here"
	-----------------------------------------------------
	
	The following support information is located on the back cover of the United
	States version of the "Microsoft Windows 95 Starts Here" CD-ROM jewel case:
	
	For phone support:
	No-charge support is available via a toll call Monday through Friday, excluding
	holidays. Call (425) 703-3562.
	
	Additional comments and suggestions can be sent to:
	
	  Product Manager, Interactive Products
	  Microsoft Press
	  One Microsoft Way
	  Redmond, WA 98052-6399
	
	Comments:
	
	Technical support for this product is split into two categories (each presented
	as an option from the support phone number):
	
	  Setup and initial configuration (press 1)
	  All other support questions (press 2)
	
	Setup and initial configuration are supported directly by Microsoft Press. All
	other issues must be handled directly by CTI (Course Technology, Inc.) technical
	support, who have additional resources to provide more in-depth support of this
	product.
	
	Support information for this and other Microsoft Press products can be obtained
	through the World Wide Web by connecting to:
	
	  http://www.microsoft.com/mspress/support/
	
	Additional comments and suggestions can also be sent by e-mail to
	MSPINPUT@MICROSOFT.COM. Please be sure you include the product name "Microsoft
	Windows 95 Starts Here" when sending e-mail to this alias.
	
	Error 102: "Setup is unable to find a compressed library file..."
	-----------------------------------------------------------------
	
	You may receive the following error when you try to run the Setup program on a
	Windows 3.x computer:
	
	  Setup is unable to find a compressed library file required to proceed with
	  the installation. Check to make sure all required files are located with the
	  setup program. Error 102
	
	Comments:
	
	This CD-ROM requires the Microsoft Windows 95 or later operating system to run
	properly. (See requirements on back of product box.) If you have Windows 3.11 or
	earlier, please upgrade to Windows 95 before trying to install this CD-ROM.
	
	Installation instructions don't appear after inserting CD-ROM
	-------------------------------------------------------------
	
	The following installation instructions appear on the CD-ROM case for "Microsoft
	Windows 95 Starts Here:"
	
	  Start the computer
	  Insert the Starts Here CD into the CD drive
	  Follow the instructions on the screen
	
	However, not all computer systems will automatically run the setup program when
	the CD is inserted.
	
	Correction:
	
	The following information should be added to the bottom of the Install section on
	the CD-ROM jewel case back cover:
	
	  NOTE: If instructions do not appear automatically, please select Run from the
	  Start menu. Then type D:\SETUP and click OK to run the setup program.
	
	Comments:
	
	To install this CD-ROM on a Windows 95 computer that does not automatically run
	the setup program:
	
	  Select Run from the Start menu
	  Type "D:\SETUP" (without the quotation marks) in the Open box provided, and
	  then click OK.
	
	  (Change the CD-ROM drive letter if necessary)
	
	Please note that this CD-ROM will not run on Windows 3.x. (See requirements on
	back of product box.) If you have Windows 3.x on your computer, you will need to
	upgrade to Windows 95 before you can use this CD-ROM.
	
	Audio or video missing or not operating
	---------------------------------------
	
	SYMPTOMS
	========
	
	Audio works fine for the initial videos, but does not work on the step by steps
	and other parts of the program.
	
	Install works fine, but initial video comes up as a blank, gray window with a
	slider at the bottom. Clicking Play and other buttons does not start the video.
	Moving the slider might display the following error:
	
	  Video not available, cannot find 'vids.msvc' decompressor.
	
	Correction:
	
	"Microsoft Windows 95 Starts Here" requires a full installation of Windows 95,
	including the multimedia audio and video compression components.
	
	Comments:
	
	Missing sound indicates that audio compression for Windows 95 is not properly
	installed. Missing video indicates that video compression is not properly
	installed.
	
	To install audio and video compression for Windows 95:
	
	1. Click Settings on the Start menu, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab, and then scroll down to the Multimedia
	  component.
	
	4. Click to select the Multimedia check box to install all Multimedia
	  components, or click the Details button and click to select both the Audio
	  Compression and Video Compression check boxes.
	
	5. Click OK (then click OK again if in the Details window), and then follow any
	  additional directions presented to add the newly selected components to
	  Windows 95.
	
	The missing audio and video will work properly once both compression components
	for Windows 95 are properly installed.
	
	Hourglass stops responding after initial Starts Here screen presented
	---------------------------------------------------------------------
	
	Symptom:
	
	After inserting the CD-ROM, an initial splash screen appears for "Microsoft
	Windows 95 Starts Here." However, the pointer becomes an hourglass, and no
	further activity occurs.
	
	Comments:
	
	This symptom is typically caused if you use Windows 95 Shell enhancement
	software, such as Norton Navigator or Packard Bell Navigator. "Microsoft Windows
	95 Starts Here" is incompatible with software that replaces or enhances the
	Windows 95 Start button or any other portion of the Windows 95 Shell.
	
	To run "Microsoft Windows 95 Starts Here," please disable or temporarily
	uninstall any navigator or other Shell enhancement programs.
	
	Computer stops responding after pressing button on the Contents screen
	----------------------------------------------------------------------
	
	"Microsoft Windows 95 Starts Here" automatically installs and runs the
	introduction video. After you click the New or Upgrade button, the Contents
	window appears with several buttons.
	
	Pressing the "What's in Windows Basics" (or many of the other buttons) may cause
	your computer to stop responding or fail.
	
	Comments:
	
	Computers with an ATI Mach 64 video card installed will fail when trying to play
	certain types of video clips. Disabling the graphics hardware acceleration will
	avoid this problem.
	
	To disable graphics hardware acceleration:
	
	1. Using the right mouse button, click the My Computer icon, and then click
	  Properties.
	
	2. Click the Performance tab, and then click the Graphics button.
	
	3. Drag the Hardware acceleration slider from Full to None. Below the slider,
	  the text will state, "No accelerator functions: Use this setting only if your
	  computer frequently stops responding or has other severe problems."
	
	4. Click OK, and then click Close to accept this change. When asked to restart
	  your computer, click Yes.
	
	"Windows 95 Starts Here" will run properly once hardware acceleration is
	disabled.
	
	ATI has developed new Windows 95 video driver software that corrects this problem
	without disabling hardware acceleration. To obtain the latest software driver
	for this video card, please contact ATI.
	
	Additional query words: mspress ms_press press bookbug MPI Microsoft Interactive
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
