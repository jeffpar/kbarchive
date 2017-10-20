---
layout: page
title: "Q107817: MS-DOS 6.2 Setup Err Msg: There Is Not Enough Free Space..."
permalink: /kb/107/Q107817/
---

## Q107817: MS-DOS 6.2 Setup Err Msg: There Is Not Enough Free Space...

{% raw %}

	Article: Q107817
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the MS-DOS 6.2 Setup, you may receive the following error message:
	
	  There is not enough free space on drive <X> to install MS-DOS.
	
	This error may occur even when there is enough disk space available.
	
	CAUSE
	=====
	
	This error message can appear if any of the following conditions exist:
	
	- Delete Sentry is running.
	
	- The actual compression ratio (ACR) does not equal the estimated compression
	  ratio (ECR) for DoubleSpace.
	
	- The beginning and ending signatures of the compressed volume file for a
	  compressed drive need to be rewritten.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Unload Delete Sentry and purge the SENTRY directory. To determine the status
	  of Delete Sentry, type the following at the MS-DOS command prompt:
	
	  " undelete /status" (without the quotation marks)
	
	2. In the DoubleSpace program, set the ECR to equal the ACR. To do this, type
	  "dblspace" (without the quotation marks) at the MS-DOS command prompt. Select
	  the Drive menu by pressing ALT+D and then select the Change Ratio option.
	  Change the ECR to the same value as ACR and press OK.
	
	3. Change the size of the host drive to force DoubleSpace to rewrite the
	  beginning and ending signatures of the compressed volume file. To do this,
	  type "dblspace" (without the quotation marks) at the MS-DOS command prompt.
	  Select the Drive menu by pressing ALT+D and then select the Change Size
	  option. Reduce the free disk space by about 0.5 megabyte and press OK.
	
	4. Run MS-DOS 6.2 Setup again.
	
	Additional query words: 6.20 SETUP TSHOOT CVF
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
