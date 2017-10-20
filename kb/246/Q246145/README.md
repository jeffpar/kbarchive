---
layout: page
title: "Q246145: Changes to the W32Time and TimeServ Utilities"
permalink: /kb/246/Q246145/
---

## Q246145: Changes to the W32Time and TimeServ Utilities

{% raw %}

	Article: Q246145
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article applies to all supplements of Microsoft Windows
	NT Server 4.0 Resource Kit. This article describes some of the changes that were
	made to updated versions of the following Windows NT Resource Kit utilities:
	
	- The Win32 Network Time Synchronization Service (W32Time.exe)
	
	- The Time Synchronization Service Utility (TimeServ.exe)
	
	Posted Product Build Versions:
	
	- W32Time.exe: 5.0.2092.1
	
	- TimeServ.exe: 5.0.1738.1
	
	These utilities for both Intel and Alpha platforms are available for download
	from the Microsoft File Transfer Protocol (FTP) site at the following location:
	
	  ftp://ftp.microsoft.com/reskit/y2kfix/
	
	NOTE: The updated W32Time utility for Windows NT should only be deployed if you
	are already using W32Time with Windows NT. If you have not deployed W32Time on
	Windows NT please use the TimeServ utility. If you are using Windows 2000 please
	use W32Time that is included with the Windows 2000 operating system.
	
	MORE INFORMATION
	================
	
	W32Time is the year 2000-compliant Time Synchronization service that takes the
	place of the earlier version of the TimeServ utility. The functionality is
	similar, however, all noncompliant functions have been removed. W32Time does not
	allow a Master Time Server to use any special hardware to access an Original
	Time Source. If your network requires a dial-up connection to a Time Source, by
	using a modem or through an Industry Standard Architecture (ISA) board in your
	computer, continue using the earlier version of TimeServ.exe.
	
	The following Type= option changes were made to this version of the W32Time.ini
	file:
	
	- Only Type=NTP (Network Time Protocol) worked in the first released version
	  for Windows NT 4.0. If you chose any other types, the service would not start
	  correctly. Fixes were implemented for Type=Primary and Type=Secondary so that
	  the service starts as expected.
	
	- When the Type= option was changed, the change was not updated correctly in
	  the registry. The registry included the new Type= key but did not remove the
	  old key. This error was fixed. When Type= is updated, the registry is
	  properly updated.
	
	- An Uninstall option was added to the command line.
	
	The following Type= option changes were made to this version of the TimeServ.ini
	file:
	
	- The Type=Internet setting no longer uses the United States Naval Observatory
	  (USNO) server as the default server for the Internet. Due to hardware changes
	  at the USNO server, all non-NTP services are unavailable. In the earlier
	  version, this could cause the system resources to be used up because the
	  program would not detect a service on the USNO server.
	
	- In the earlier version, the program halted future synchronization attempts if
	  it received the following message when it tried to retrieve the time:
	
	  gethostbyname() WSATRY_AGAIN
	
	  The new version of the program continues future synchronization attempts.
	
	- In the earlier version, there was a delay in insertion of a leap second
	  through a multi-tiered environment, although this delay did not occur in
	  every instance. The TimeServ utility currently does not schedule the
	  insertion for the exact moment at midnight. Instead, TimeServ inserts the
	  second at the first synchronization after the source time has adjusted, and
	  then logs the event.
	
	  In a tiered environment, the leap second may be inserted in the following
	  order:
	
	  1. On the master server.
	
	  2. When any primary machines request the time from the master.
	
	  3. When any secondary machines request the time from a primary.
	
	  For types that warn of a coming leap second, the TimeServ utility optimizes
	  the synchronization time to be shortly after the moment of leap second
	  insertion.
	
	  The synchronization occurs with certain allowances for randomization in order
	  to spread potential overloading at individual servers, and delays due to
	  tiered structure. The TimeServ utility tries to resynchronize all machines
	  within 15 minutes of the leap second.
	
	- The updated version of the TimeServ utility has a new, automatic speed detect
	  feature. Type=TrueTime specifies to use the TrueTime Serial input/output
	  (I/O) format as found on the TrueTime Mark units. The later units from
	  TrueTime, such as the XL-DC Model, can typically use Emulation mode for
	  compatibility, or can use the default output format to keep continuous time
	  once per second. By using either of these methods, a computer can set its
	  internal clock to within 1 millisecond of the national time scale by direct
	  telephone connection.
	
	REFERENCES
	==========
	
	For additional information about TrueTime products and services, go to the
	following address for the TrueTime Web site:
	
	  http://www.truetime.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional documentation about Win32 Network Time Synchronization Service is
	available from the Microsoft FTP site at:
	
	  ftp://ftp.microsoft.com/reskit/y2kfix/x86/w32time/w32time.doc
	
	Additional documentation about the Time Synchronization Service Utility is
	available from the Microsoft FTP site at:
	
	  ftp://ftp.microsoft.com/reskit/y2kfix/x86/timeserv/timeserv.htm
	
	For additional information about Windows Sockets error codes, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q150537 Windows Sockets Error Codes, Values, and Meanings
	
	To learn more about other utilities included in the Resource Kit, refer to any of
	the following Microsoft Press books:
	
	  Microsoft Windows NT Server 4.0 Resource Kit - (3 volume set)
	  ISBN: 1-57231-344-7
	
	  Microsoft Windows NT Server 4.0 Resource Kit - Supplement One
	  ISBN: 1-57231-559-8
	
	  Microsoft Windows NT Server 4.0 Resource Kit - Supplement Two
	  ISBN: 1-57231-626-8
	
	  Microsoft Windows NT Server 4.0 Resource Kit - Supplement 4
	  ISBN: 0-7356-0837-7
	
	NOTE: This article provides information about Resource Kit utilities that are not
	supported by Microsoft. All Resource Kits utilities are provided AS-IS unless
	specifically noted otherwise. This article is provided for informational
	purposes only; Microsoft makes no guarantee that these utilities function
	properly. In addition, the Timeserv utility that was included on the Windows NT
	4.0 Resource Kit has been discontinued, and Microsoft will not make any further
	fixes to this utility or release it in the future.
	
	Additional query words: reskit rkbook
	
	======================================================================
	Keywords          : kbtool 
	Component         : ResourceKit
	Technology        : kbMSPressSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
