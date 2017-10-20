---
layout: page
title: "Q243405: Device Drivers Use FILE_DEVICE_SECURE_OPEN DeviceCharacteristics"
permalink: /kb/243/Q243405/
---

## Q243405: Device Drivers Use FILE_DEVICE_SECURE_OPEN DeviceCharacteristics

{% raw %}

	Article: Q243405
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a device object in a program under the following conditions, it is
	possible to obtain greater access to that object than the designated permissions
	allow:
	
	- The device object has already been opened and you specify a relative file
	  name of zero length to open a handle within that object.
	
	- The path specified to the device includes an additional trailing backslash
	  name or character, and the device does not accommodate a parse routine.
	
	This behavior particularly affects the following files in relation to I/O
	Manager:
	
	- Floppy.sys (Floppy Driver in C:\winnt\system32\drivers\)
	
	- Netdetect.sys (Network Card Detection driver Driver in
	  C:\winnt\system32\drivers\)
	
	- Parport.sys (Parallel Port Driver in C:\winnt\system32\drivers\)
	
	- Null.sys (NULL Driver in C:\winnt\system32\drivers\)
	
	- Beep.sys (BEEP Driver in C:\winnt\system32\drivers\)
	
	- Scsiport.sys (SCSI Port Driver in C:\winnt\system32\drivers\)
	
	- Tcpip.sys (TCP/IP driver in C:\winnt\system32\drivers\)
	
	CAUSE
	=====
	
	This problem occurs because it is the responsibility of a device driver of the
	corresponding device that creates or opens a logical DeviceObject in the
	operating system name space with IoCreateDevice() to represent the device.
	Detail of IoCreateDevice() can be found on MSDN at
	http://msdn.microsoft.com/library/ddkdoc/ntddk/native/ddk/kr/src/k104_22.htm.
	
	In Windows NT 4.0 Service Pack 6a and earlier, the seven aforementioned device
	drivers do not call IoCreateDevice() with the FILE_DEVICE_SECURE_OPEN
	DeviceCharacteristics. The seven that are included in the C2 Update call
	IoCreateDevice() with the FILE_DEVICE_SECURE_OPEN DeviceCharacteristics. The
	Windows NT IO manager that services IoCreateDevice() performs the necessary
	access check and audits the event if a relative file name of zero length is
	specified or an additional trailing backslash name or character is included in
	the path to the device.
	
	NOTE: Other device drivers shipped with Windows NT 4.0 Service Pack 6a have been
	tested for making the IoCreateDevice() call with the FILE_DEVICE_SECURE_OPEN
	DeviceCharacteristics.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, the following files are available for download from the
	Microsoft Download Center or Microsoft's FTP site. Click the file names below to
	download the appropriate file:
	
	English:
	
	  x86:
	
	  Microsoft Download Center: DownloadDownload Q244599i.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/NT4/EN-US/Q244599i.exe)
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  Microsoft Download Center: DownloadDownload Q244599a.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/ALPHA/EN-US/Q244599a.exe)
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	French:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	Spanish:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: c2 security_patch
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
