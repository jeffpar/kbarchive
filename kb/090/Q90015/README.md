---
layout: page
title: "Q90015: Mail in Startup Group Conflicts with Sound System Setup"
permalink: kb/090/Q90015/
---

## Q90015: Mail in Startup Group Conflicts with Sound System Setup

	Article: Q90015
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Windows Sound System version 1.0 installation, Setup may restart Windows
	so that you can install the sound driver. Before you restart Windows, Setup puts
	a Sound System Setup icon in the Startup group, allowing Setup to continue after
	Windows restarts.
	
	A conflict can arise if you also have Microsoft Mail in your Startup group. As
	Windows restarts, it loads Mail, and you are prompted to enter your password.
	Then the Windows Sound System Setup begins. When Setup completes and you choose
	the Restart Windows button, the following message displays:
	
	  Stop: An action in Mail must be completed before exiting Windows
	
	If you choose OK, the following message displays:
	
	  Windows could not exit successfully. Please close any running applications
	  and MS-DOS sessions and try again.
	
	An immediate solution is to choose the Exit Setup button. This returns you to the
	Mail dialog box where you can choose the Cancel button or enter your password.
	The Windows Sound System installation is complete; however, the changes made by
	Setup do not take effect until you restart Windows.
	
	MORE INFORMATION
	================
	
	This situation also occurs when you are running the Windows Sound System Setup
	program from MS-DOS while Mail is in the Startup group. Other possible solutions
	are:
	
	- When you are prompted with the message:
	
	  Windows could not exit successfully. Please close any running applications
	  and MS-DOS sessions and try again.
	
	  press CTRL+ESC. In the Task List, select Microsoft Mail from the list of
	  active tasks, and choose the End Task button.
	
	- When Microsoft Mail prompts you for your password, choose the Cancel button.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
