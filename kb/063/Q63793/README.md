---
layout: page
title: "Q63793: Communication Port Data Loss in Enhanced-Mode Windows 3.0"
permalink: /kb/063/Q63793/
---

## Q63793: Communication Port Data Loss in Enhanced-Mode Windows 3.0

{% raw %}

	Article: Q63793
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about why MS-DOS applications lose
	communication-port data when running from enhanced mode in Microsoft Windows
	version 3.0, and the steps to eliminate this problem.
	
	MORE INFORMATION
	================
	
	Data Loss at 2400 Bits Per Second (BPS) or Slower
	-------------------------------------------------
	
	Communication-port data loss should not occur when using MS-DOS applications
	operating at bit rates of 2400 BPS or less. However, data loss may occur at
	higher bit rates. If you are experiencing problems at 2400 BPS or slower, check
	for a hardware communication-port I/O base or interrupt assignment conflicts.
	
	Data Loss at Rates Higher than 9600 BPS
	---------------------------------------
	
	MS-DOS applications cannot use bit rates greater than 9600 BPS when running under
	enhanced-mode Windows 3.00. To use higher rates, such as 19,200 BPS, use a
	Windows-based communications application, such as FutureSoft's DynaComm
	Asynchronous, or DCA's CrossTalk for Windows.
	
	19.2 kilobits per second (Kbps) is the maximum possible data rate for a
	Windows-based application.
	
	Data Loss at 9600 BPS
	---------------------
	
	On many hardware platforms it is not possible to use 9600 BPS in an MS-DOS
	application under enhanced mode. This depends on the speed of the processor and
	the type of communication-port hardware being used. If you are experiencing
	problems at 9600 BPS, take the appropriate steps as explained below. The steps
	are different for text only or text/binary data.
	
	1. Text data only
	
	  If you are transferring text data ONLY, and your MS-DOS application supports
	  XON/XOFF software flow control, you can configure enhanced-mode Windows to
	  process the XON/XOFF signals internally. This may assist in preventing data
	  loss at 9600 BPS. To enable this feature, insert the following line in the
	  [386Enh] section of the SYSTEM.INI file:
	
	  COMxProtocol=XOFF
	
	  where x is the communication port in question. For example, if you are using
	  COM1, use COM1Protocol=XOFF. It is important to note that this switch does
	  NOT work if you are performing ANY binary data transfers, and actually
	  prevents such data from being transferred correctly. In addition to adding
	  this switch, you should increase the enhanced-mode virtual communication-port
	  buffer size, as detailed below (in Step 2).
	
	2. Binary data, or text and binary data combination
	
	  If you are transferring any type of binary data, such as downloading from a
	  computer bulletin board by modem, you may want to increase the enhanced-mode
	  virtual communication-port buffer size. This may be done by adding a switch
	  to the [386Enh] section of the SYSTEM.INI file, as follows
	
	  COMxBuffer=yyy
	
	  where x is the communication port in question, and yyy is the buffer size in
	  characters (default 128). For example, if you are using COM1, and want to
	  increase the buffer size to 256, use COM1Buffer=256. Since the buffer default
	  is 128, start with 256 and work upward in 128-character increments until the
	  data loss is eliminated. Note that data loss cannot be eliminated in all
	  cases; in such situations, a Windows communications application should be
	  used.
	
	Additional query words: 3.00 3.0 3.0a 3.00a wincomm win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
