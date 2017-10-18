---
layout: page
title: "Q159420: Mac Encarta 97: Trouble Downloading/Integrating Yearbook Update"
permalink: kb/159/Q159420/
---

## Q159420: Mac Encarta 97: Trouble Downloading/Integrating Yearbook Update

	Article: Q159420
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): kb3rdparty kbinteropkbfaq
	Last Modified: 24-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to download the Encarta 97 updates, you may experience one of the
	following symptoms:
	
	- A screen appears that asks you to configure a Helper application.
	- The update starts to download, but then appears as garbled text in your
	  browser window.
	
	CAUSE
	=====
	
	The web browser does not understand what action to perform with the Encarta 97
	Update (.eyb) file type.
	
	RESOLUTION
	==========
	
	For your web browser to download the Encarta 97 updates without prompting you
	for instructions, you need to have the helper correctly configured. The
	following steps allow you to correctly configure the Encarta 97 Update helper.
	
	This article includes steps for some of the most common web browsers. Some of
	these steps may change as newer versions of web browsers are released. If
	instructions for your browser are not listed, please contact the manufacturer of
	your web browser for information about creating a helper.
	
	NOTE: An alternative to using these instructions, is to save the .eyb file to
	your hard drive. Then, follow the instructions in the "Integrate Your Yearbook
	Files" section below.
	
	Internet Explorer, versions 2.1, 3.0, 3.0a
	------------------------------------------
	
	1. Start Internet Explorer.
	
	2. On the Edit menu, click Preferences (or Options).
	
	3. Click the Helpers tab.
	
	4. Click Add.
	
	5. Enter the following information:
	
	  Description: Encarta 97 Updates
	  MIME Type: application/encarta
	  Suffixes: .eyb
	  Encoding: Binary
	  File Type: UPDT (all in upper case)
	
	6. To configure the Helper Application, click Choose.
	
	7. Locate and select the Encarta 97 Encyclopedia application on your computer.
	
	  NOTE: Encarta 97 Encylopedia should appear in the Helper Application: field.
	
	8. Make sure the How To Handle setting is "Use Helper Application."
	
	9. Click New.
	
	NOTE: You may need to exit and restart your web browser before the changes take
	effect.
	
	The Encarta 97 updates should now successfully download to your computer, and
	then automatically start Encarta 97 to initiate the update integration process.
	You should not need to manually integrate the yearbook files. However, if you
	do, follow the instructions in the "Integrating Your Yearbook Files" section at
	the end of this article.
	
	America Online
	--------------
	
	NOTE: If you are currently using version 2.7 of the AOL software, upgrade to
	version 3.0 of the AOL software. Otherwise, you will need to follow the
	instructions in the "Integrating Your Yearbook Files" section listed below.
	
	To configure the helper application with AOL software, do the following:
	
	1. On the Members menu, select Preferences...
	
	2. Scroll through the left column of icons until you see the Helpers option.
	  Click Helpers.
	
	3. Click Create.
	
	4. Enter the following information in the specified field:
	
	  +----------------------------------------------------------------+
	  | Field                                    | Information         | 
	  +----------------------------------------------------------------+
	  | Open files with the following MIME type: | application/encarta | 
	  +----------------------------------------------------------------+
	  | Or the following suffixes:               | eyb                 | 
	  +----------------------------------------------------------------+
	
	5. Click the "Select..." button.
	
	6. Use the dialog box to locate the Encarta 97 application icon. Click the
	  button once, then click Select.
	
	  NOTE: Encarta 97 Encylopedia should appear in the "With the application
	  program:" field.
	
	7. From the drop-down box to the right of "Also open Macintosh files with
	  type:," select "UPDT."
	
	8. Select "Open those files with this helper application program even if America
	  Online can open them."
	
	NOTE: You may need to exit and restart your web browser before the changes take
	effect.
	
	Encarta 97 updates should now successfully download to your computer. You now
	need to follow the instructions in the "Integrating Your Yearbook Files"
	section, below.
	
	Netscape Navigator, version 3.0
	-------------------------------
	
	NOTE: If you are currently using an earlier version of the Netscape Navigator
	software, upgrade to version 3.0. Then, follow the instructions listed below.
	
	To configure the helper application, do the following:
	
	1. Start Netscape Navigator.
	
	2. On the Options menu, select "General Preferences..."
	
	3. Click the Helpers tab, then click the "New..." button.
	
	4. Enter the following information in the corresponding fields:
	
	  Description: Encarta 97 Updates
	  MIME Type: application/encarta
	  Suffixes: .eyb
	
	5. In the "Handled by" section, click the "Application" option. Then click the
	  "Browse..." button.
	
	6. In the dialog box, locate the Encarta 97 Encyclopedia application icon, click
	  it, then click OK.
	
	7. Click OK to close the Edit Type dialog box, then click OK again to close the
	  General Preferences dialog box.
	
	NOTE: You may need to exit and restart your web browser before the changes take
	effect.
	
	The Encarta 97 updates should now successfully download to your computer. To
	integrate the files, follow the steps in the "Integrating Your Yearbook Files"
	section, below.
	
	Integrating Your Yearbook Files
	-------------------------------
	
	1. Drag the update files (.eyb) from the folder where you downloaded them into
	  the Updates folder in the following location:
	
	  Macintosh HD: Encarta 97 Encyclopedia: Updates
	
	  where Macintosh HD is the name of your hard drive.
	
	2. Start Encarta 97.
	
	3. Click Online Features from the Encarta 97 home screen.
	
	4. Click the Downloads option, then click Integrate.
	
	5. Follow the on-screen instructions.
	
	NOTE: Integration may take one to fifteen minutes (approximately), depending on
	the number of updates you are integrating and the speed of your computer.
	
	MORE INFORMATION
	================
	
	Suffixes (for example,. eyb) are used by web browsers in order to determine what
	the browser does with particular files. Encarta 97 uses files with the .eyb
	suffix to integrate them into the program.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm down load down-load up date up-date browser www ie3 ie21 ie2.1 aol aol30 aol3.0 aol2.7 nav macmm
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1997Mac
	Version           : :1997 edition
	Issue type        : kbinfo
	
	=============================================================================
	
