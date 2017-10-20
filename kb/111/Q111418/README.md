---
layout: page
title: "Q111418: Scenes 1.0: Error Messages During Setup"
permalink: /kb/111/Q111418/
---

## Q111418: Scenes 1.0: Error Messages During Setup

{% raw %}

	Article: Q111418
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Scenes on a computer with fewer than 450 kilobytes
	(450K) of free hard disk space, you may receive an error message.
	
	NOTE: These error messages assume C is the letter of your hard drive.
	
	- If you have fewer than 450K free disk space, you receive the following
	  error:
	
	  Load Library() Failed.
	
	- If you have 400K free disk space, you may receive the following error
	  message:
	
	  The INF file "C:\~MSSETUP.T\SETUP.INF" does not start with a section label.
	  Check to see if it is misformed.
	
	  After you choose OK in response to the above error, you also receive the
	  following error:
	
	  
	
	     FOPENINFC() Failed                    400K free
	
	- If you have 350K free disk space, you receive the following error message:
	
	  Application error in MSINSSTF.DLL.
	
	CAUSE
	=====
	
	Setup normally copies all necessary installation files to your hard drive. These
	errors occur when there is insufficient disk space to copy all these files to
	the hard drive.
	
	RESOLUTION
	==========
	
	To correct this problem, increase the available hard disk drive space using one
	of the following methods. For more information about how to accomplish these
	tasks in Windows, see your printed Windows documentation or online help.
	
	Method 1
	--------
	
	Move or delete unnecessary files.
	
	Method 2
	--------
	
	If you are using disk compression, change the hard disk drive size.
	
	Additional query words: msscenes errors problems memory space k shortage screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
