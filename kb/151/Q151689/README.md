---
layout: page
title: "Q151689: XADM: Error Starting Key Management Server"
permalink: /kb/151/Q151689/
---

## Q151689: XADM: Error Starting Key Management Server

{% raw %}

	Article: Q151689
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When starting the Microsoft Exchange Key Management Server (KM Server) the
	following error is received.
	
	  The Microsoft Exchange Key Manager service returned service specific error 1
	
	The Windows NT Event Log might have the following error message.
	
	  The Exchange KM service failed to start. Ensure that the KMSMSG.DLL and
	  KMSERVER.EXE files have the same version and are in the same location and
	  that you have provided the KM server password in the startup parameters in
	  the services panel.
	
	MORE INFORMATION
	================
	
	There are two main reasons why the above error message can be generated:
	
	- The service account for KM Server is wrong or the password for the system
	  account is wrong.
	
	- The password for the KM service startup parameters was not specified and the
	  KM Server floppy is not accessible. The floppy disk might not be present
	  because the option to create a KM Server floppy disk might not have been
	  selected during installation of the KM Server
	
	To correct this problem, verify that the system account for the Microsoft
	Exchange Key Manager service is the same account being used by the Microsoft
	Exchange Directory service.
	
	This problem can also occur if, during the installation of the Microsoft Exchange
	KM Server, an error was encountered writing the data to the floppy drive.
	
	The password for the Key Manager startup parameters must be entered every time
	the KM service is started . This is the password that was received during
	installation of the KM server. This password can be stored on a floppy which is
	in the drive every time the KM server is started. This floppy should have a file
	called Kmspwd.ini with the following information:
	
	  [config]
	  pwd=<14 character password>
	
	For example:
	
	  [config]
	  pwd=ABCDEFGHIJKLMN
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
