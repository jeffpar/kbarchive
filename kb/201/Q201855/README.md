---
layout: page
title: "Q201855: SMS: Dll.log on Client Does Not Report Date/Time on Error Messag"
permalink: kb/201/Q201855/
---

## Q201855: SMS: Dll.log on Client Does Not Report Date/Time on Error Messag

	Article: Q201855
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Systems Management Server 2.0 client records Windows Management Interface
	(WMI) related connectivity errors in Dll.log, which is located at
	%Windir%\System32\WBEM (for client computers running Windows NT) or
	%Windir%\System\WBEM (for client computers running Windows 95 or Windows 98).
	Dll.log reports errors connecting WinMgmt and DLLs but without date-time stamps
	or further descriptions.
	
	This is a WMI\WBEM problem and is noncritical to Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	To Reproduce the Problem
	
	Install Systems Management Server 2.0; Cim.rep is created and Dll.log under \WBEM
	is generated. Dll.log reports access errors as shown below:
	
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\WinMgmt.exe.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\fastprox.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\mofd.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\wbemcomn.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\wbemcore.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\wbemess.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\wbemprox.dll.
	  Error: Access denied to file C:\WINNT40E\System32\WBEM\wbemsvc.dll
	
	Additional query words: prodsms cli32 smswmi hwinv32 smsprov Win9x Win95 Win98
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
