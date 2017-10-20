---
layout: page
title: "Q160164: XCLN: MAC: Application Error Type 1"
permalink: /kb/160/Q160164/
---

## Q160164: XCLN: MAC: Application Error Type 1

{% raw %}

	Article: Q160164
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch or install the Microsoft Exchange Macintosh client, you may
	receive the following error message:
	
	  Application Unknown has unexpectedly quit because of an error type 1.
	
	CAUSE
	=====
	
	A "Type 1" error is a Bus Error, which can be caused by several things such as
	extension conflicts, corrupt font, memory conflicts, or system corruption.
	
	WORKAROUND
	==========
	
	The following is a list of possible workarounds to this problem:
	
	- Load minimal extensions. Go to the Control Panel Extensions Manager. Uncheck
	  any unnecessary extensions and restart. You should leave the OLE and
	  Networking extensions running, and the Microsoft extensions. If this works,
	  you most likely have an extensions conflict. Add the extensions back one by
	  one, restarting the computer each time, and test until you find the conflict.
	  If you do not have Extensions Manager, holding down the Shift key when you
	  reboot will load without extensions.
	
	
	- If you are running Microsoft Exchange on a PowerMac, try tuning the Memory
	  Control Panel. It is recommended to change disk cache size to 1024K, turn on
	  Modern Memory Manager, turn on Virtual Memory, and set the Virtual Memory to
	  two times "built-in memory" plus 1MB.
	
	  Example: If the PowerMac has 16MB of RAM, then set the Virtual Memory to 33MB.
	
	- Change the "Minimum size" to run the application to 4500K. Highlight the
	  Microsoft Exchange application file, and choose "Get Info" by holding down
	  the Apple and I keys. Change the "Minimum size" to 4500K. You can also try
	  maximizing the size to 4500K.
	
	  NOTE: For PowerMacs, if Virtual Memory is turned off, memory requirements will
	  increase. This will vary by PowerMac model and System version. For more
	  information, choose "Get Info" on the Microsoft Exchange application.
	
	- Drag the Fonts folder, located in the System folder, to the desktop. Restart
	  the Macintosh to create a new Fonts folder. Things will not look very nice,
	  but this step is for troubleshooting only. If everything works fine, reload
	  the fonts from the system disk or CD, and/or from other manufacturer's
	  installation files.
	
	- Reinstall Microsoft Exchange. To perform a "clean" Microsoft Exchange
	  installation, see Q158519, "XCLN: Removing and Reinstalling the Macintosh
	  Client" in the Microsoft Knowledge Base.
	
	- Rebuild the desktop. Restart and hold down the Option and Apple keys. Hold
	  down until prompted to rebuild the desktop, and then click OK.
	
	- Zap the Parameter RAM (PRAM). Restart and hold down the Option+Apple+P+R
	  keys. Hold down all four keys and the system will act like it is rebooting.
	  Repeat this three times to make sure the PRAM has been cleared, and then let
	  the machine boot normally.
	
	- There may be System corruption. Try a new installation of the System
	  software. Then install Microsoft Exchange (and only Microsoft Exchange) and
	  test it. To install a new System folder alongside the current System folder,
	  boot to the install disk or CD, and then hold down the Command+Shift+K keys
	  when you run the installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
