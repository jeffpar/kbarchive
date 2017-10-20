---
layout: page
title: "Q82643: Serial Communications Overview in Windows 3.1"
permalink: /kb/082/Q82643/
---

## Q82643: Serial Communications Overview in Windows 3.1

{% raw %}

	Article: Q82643
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, Terminal and other Windows communications
	applications work as described in the following paragraphs.
	
	MORE INFORMATION
	================
	
	1. Applications open and initialize an available communications port using the
	  standard Windows application program interface (API). Windows keeps track of
	  what ports are in use by other applications, and will return an error code if
	  a requested port is already in use.
	
	  Windows applications do not need to know how to access specific types of
	  communications hardware; this is handled in a device independent fashion by
	  the communications API and driver.
	
	  Windows applications can select bit rates up to 57.6 kilobits per second
	  (Kbps) via the communications API.
	
	2. Windows applications send/receive data to/from the COM port using the
	  standard Windows API documented in the SDK.
	
	  To service active port connections, Windows applications should set a timer or
	  use the EnableCommNotification() API. EnableCommNotification() will send a
	  window message to the application when data buffers are filled or empty. This
	  prevents the application from unnecessarily clogging the system when waiting
	  for data transmissions. Applications should NOT rely on PeekMessage() when
	  servicing open ports.
	
	3. Windows sends/receives application data to/from the communications driver
	  (COMM.DRV). In Windows 3.1, the data is sent and received between Windows and
	  the driver in blocks, rather than individual characters. This reduces
	  transmission overhead and improves performance. Windows 3.00 used individual
	  characters.
	
	4. The communications driver sends/receives data to/from the COM port. The COM
	  driver supports 8250 compatible universal asynchronous receiver transmitters
	  (UARTs). Also, the Windows 3.1 COM driver enables the FIFO buffer of 16550A
	  compatible UARTs in order to reduce interrupt overhead and improve data
	  throughput. Special communications devices may require a replacement
	  communications driver to support extra features or a different hardware
	  interface.
	
	5. In enhanced mode, the virtual communications device (VCD) virtualizes COM
	  port hardware to arbitrate access by multiple applications. The VCD notifies
	  virtual machines (VMs) when their COM ports require servicing.
	
	  In enhanced mode, COMBUFF buffers data between the communications driver and
	  physical port. This prevents multitasking applications from losing data when
	  they do not currently have CPU time.
	
	6. Finally, data is received and transmitted by the physical COM port to/from
	  the attached device (for example, modem, direct connection, fax card, and so
	  on.). Some COM ports have onboard data buffers, such as those using the
	  16550A UART, to improve communications throughput and reduce errors.
	
	
	KBCategory: kbusage kbtool
	KBSubcategory: win31 wincomm windrvr
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
