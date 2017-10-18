---
layout: page
title: "Q140428: MS Plus! Setup Err Msg: This Is an Invalid Command Line Option"
permalink: kb/140/Q140428/
---

## Q140428: MS Plus! Setup Err Msg: This Is an Invalid Command Line Option

	Article: Q140428
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Plus! Setup with a command-line switch, you may receive
	the following error message:
	
	  Setup Error 530
	  This is an invalid command line option: /x
	
	When you click OK, you receive the following message:
	
	  Setup - Usage
	  setup [/A] [/G filename] [/Q[0|1|T]] [/R] [/U[A]] [/Y]
	
	  /A Administrator mode
	  /G filename Generate logfile of installation activity
	  /Q[0|1|T] Quiet install mode (0 shows exit, 1 hides exit, T hides
	            all display)
	  /R Reinstall the application
	  /U[A] Uninstall the application but leave shared components (/UA
	        to remove all)
	  /Y Install without copying files
	
	CAUSE
	=====
	
	The Setup Usage dialog box is incorrect. The /A and /Q switches are not
	supported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95.
	
	MORE INFORMATION
	================
	
	The following switches are supported by Microsoft Plus! Setup:
	
	  /G filename - Specify filename, such as Pluslog.txt, to create a
	                text log of the Setup process.
	
	  /U[A]       - Starts Setup in maintenance mode. Removes Microsoft
	                Plus! components without prompting.
	
	                NOTE: This does not remove DriveSpace 3 if there is an
	                existing compressed DriveSpace 3 volume.
	
	  /R          - Starts Setup in maintenance mode. Reinstalls components
	                without prompting.
	
	  /Y          - Runs Setup without copying the Microsoft Plus! files to
	                the hard disk. However, depending on the components that
	                are selected, the original Windows 95 disks or CD-ROM may
	                be required so that Windows 95 files can be copied. In
	                addition, you may receive missing file error messages
	                when Setup calls the Internet Explorer Setup Wizard or
	                the Desktop Themes tool.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
