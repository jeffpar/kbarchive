---
layout: page
title: "Q99801: INFO: Increasing the Transmission Retry Timeout for Printing"
permalink: kb/099/Q99801/
---

## Q99801: INFO: Increasing the Transmission Retry Timeout for Printing

	Article: Q99801
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The number of seconds for transmission retry timeout can be set through the
	Connect dialog box in the Printers application of the Control Panel. The entry
	in the Transmission Retry field is limited to 999 and is set individually for
	each printer. This limit cannot be increased. However, an application can
	increase the default transmission retry value up to 65536 by editing the
	TransmissionRetryTimeout value in the Windows section of WIN.ini. This setting
	takes effect when the Print Manager is disabled.
	
	MORE INFORMATION
	================
	
	The TransmissionRetryTimeout entry in the Windows section of WIN.ini is the
	default retry value. It is limited to 65536 and resembles the following:
	
	     [windows]
	     TransmissionRetryTimeout=45
	
	There is also a retry value for each printer in the PrinterPorts section of
	WIN.ini; it is limited to 999 and resembles the following (the format is
	"device=driver,port,DeviceTimeout,RetryTimeout"):
	
	     [PrinterPorts]
	     HP LaserJet IIISi=HPPCL5MS,FILE:,15,45
	     HP LaserJet IIISi PostScript=pscript,FILE:,15,90
	
	When the retry value for a particular printer is changed via the Control Panel,
	the value in the PrinterPorts section is changed. The Control Panel does not
	alter the value in the Windows section. The TransmissionRetryTimeout value in
	the Windows section must be changed manually by editing WIN.ini with a text
	editor or programmatically by calling a function such as WriteProfileString().
	GetProfileInt() can be used to determine the current setting.
	
	NOTE: Control Panel sets the default transmission retry value for the PostScript
	driver (PSCRIPT.drv) to twice the default value of other drivers.
	
	The TransmissionRetryTimeout setting is used only if Print Manager is disabled.
	Otherwise, the RetryTimeout value listed in the PrinterPorts section for the
	current printer is used.
	
	For more information about disabling Print Manager programmatically, query on the
	following words in the Microsoft Knowledge Base:
	
	  print and manager and disable
	
	Additional query words: 3.10 USR_Sys_OtherCP
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
