---
layout: page
title: "Q131887: UNCONF: PRB: Problems If Change PCAnywhere Entry in SYSTEM.INI"
permalink: /kb/131/Q131887/
---

## Q131887: UNCONF: PRB: Problems If Change PCAnywhere Entry in SYSTEM.INI

{% raw %}

	Article: Q131887
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	WARNING: The information in this article has not been confirmed or tested
	by Microsoft. Some or all of the information in this article has been taken
	from unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION
	PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK. Microsoft provides this
	information "as is" without warranty of any kind, either expressed or
	implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	SYMPTOMS
	========
	
	Issuing three or more consecutive REPORT FORM commands causes a "Printer Not
	Ready" error to occur.
	
	CAUSE
	=====
	
	PCAnywhere by Symantec adds the following lines to the SYSTEM.INI file:
	
	     [386 Enhanced]
	     timercriticalsection=500
	     device=awdos.386
	     device=vpcaw.386
	     device=symevnt.386
	
	WORKAROUND
	==========
	
	Remove the lines added by PCAnywhere.
	
	If the error persists, try changing the default printer driver or adding a few
	seconds of delay between each REPORT FORM command by using a FOR .. NEXT loop.
	If a different printer driver eliminates the error, obtain the latest version of
	the default printer driver.
	
	MORE INFORMATION
	================
	
	When you install PCAnywhere, it modifies the Windows SYSTEM.INI file and adds a
	few device drivers to handle the display as well as the COM and LPT ports.
	FoxPro for Windows may give you a 'Printer Not Ready' error message when the
	REPORT FORM is issued three or more consecutive times. Uninstall PCAnywhere to
	resolve this error. Depending on the version of PCAnywhere, drivers other than
	what is listed above may exist in the INI file(s). For a complete listing of
	changes done to the SYSTEM.INI or WIN.INI file, consult with Symantec or check
	your documentation.
	
	PCAnywhere is manufactured by Symantec, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Please note that the communication port architecture in version 3.1 of Windows
	and Windows for Workgroups was changed in Windows for Workgroup version 3.11.
	
	REFERENCES
	==========
	
	For more information about communication port architecture, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q126746 Windows for Workgroups Version History
	
	  Q115404 ErrMsgs After Upgrade:"Port Is Currently..." or "System Error"
	
	  Q111094 RAS ErrMsg: NETBIOS Error 640: A Netbios Error Has Occurred
	
	
	Additional query words: unconfirmed FoxWin lpt.386 serial.386 vcomm.386 *vcd comm.drv
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260a
	
	=============================================================================
	

{% endraw %}
