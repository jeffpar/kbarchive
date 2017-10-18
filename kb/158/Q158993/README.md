---
layout: page
title: "Q158993: SMS: Troubleshooting Novell NetWare Client32 Clients"
permalink: kb/158/Q158993/
---

## Q158993: SMS: Troubleshooting Novell NetWare Client32 Clients

	Article: Q158993
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbConfig kbInventory smsinv smshowto smsconfig
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server supports clients with the Novell NetWare Client32
	Redirector for Windows 95. The Redirector can work quite successfully, though
	there are many caveats.
	
	The Client32 client logs on to a NetWare 3.12 or 4.0 Systems Management Server
	logon server. It is not possible to use the Client32 Redirector to log on to a
	Windows NT Server domain. There are also potential problems with Windows 95 dual
	Redirector clients that log on both to a Windows NT Server domain and a Novell
	server, but have Systems Management Server installed and inventoried by the
	Windows NT Server logon server. Troubleshoot these clients with the steps below.
	
	MORE INFORMATION
	================
	
	Manually running "Invdos.exe /V" (without the quotation marks) from the
	SYS:SMS\LOGON.SRV\x86.bin directory may result in the following error if
	Runsms.bat has never been run:
	
	  Error Writing to File 00000000.tmp.
	
	If the Runsms.bat has been run once, INVDOS runs correctly.
	
	NOTE: This problem occurs with both the Client32 and the Microsoft Client for
	NetWare Networks.
	
	Changing between Remote Troubleshooting utilities can be unreliable. You may have
	to click the icon for the utility twice to establish a chat, or a second attempt
	may result in an "unable to locate" message , forcing you to quit the Remote
	utilities, or restart the client to reestablish the connection.
	
	Client32 will be more reliable if you perform the following steps:
	
	1. Use a fresh installation of Windows 95 with both of the following:
	   - Microsoft Client for NetWare Networks
	
	   - IPX Compatible Transport
	
	2. Run the Setup.exe program of the Novell Client32 with the updated
	  Client32.nlm file (dated 9/23/96 or later) in the source.
	
	3. Configure the Client Logon screen to log on to a preferred server, and click
	  to place a check in the Bindery box.
	
	4. Restart the computer.
	
	5. Map to the Sms\Logon.srv directory and run the Runsms.bat batch file, or run
	  the Smsls.scr logon script.
	
	This procedure may fail all or most of the time if any of the following
	conditions are true:
	
	NOTE: The TID numbers referenced below are Novell Technical Information
	Documents. You can find them at http://www.netware.com/.
	
	- You have ever attempted to remove the Client32 by either running the (Novell)
	  supported Client32 deinstall program or by manually removing it from the
	  Network Control Panel (REF: TID2910349).
	
	- The Microsoft Client for NetWare Networks was not installed before the
	  Client32 installation (REF: TID2905984).
	
	- An IPX compatible transport was not installed before the Client32
	  installation (REF: TID2905984).
	
	- You ran the Smsls.scr without adding extensions to the entries for netspeed,
	  dosver and clrlevel (REF: TID2907800).
	
	NOTE: The Systems Management Server 1.2 Release Notes mention that you need to
	make an entry in the Net.cfg file, but Client32 does not use the Net.cfg. file.
	
	The product discussed here, the Novell NetWare Client32 for Windows 95, is
	manufactured by Novell Inc., a manufacturer independent of Microsoft. We make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: prodsms Win95 NW novel redirecter client 32
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbConfig kbInventory smsinv smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
