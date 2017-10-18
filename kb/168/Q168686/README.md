---
layout: page
title: "Q168686: PRB: Performance Loss When Upgrading Jet ODBC Driver"
permalink: kb/168/Q168686/
---

## Q168686: PRB: Performance Loss When Upgrading Jet ODBC Driver

	Article: Q168686
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5,4.2,5.0,95; winnt:3.5,3.51,4.0,4.0 SP4,5.0
	Operating System(s): 
	Keyword(s): kbProgramming kbMFC kbODBC kbVC kbGrpDSVCDB MSGRAPH kbMDAC250
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0, 4.0 SP4 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Visual C++ database project that uses the Microsoft Access 97 (Jet
	3.5) ODBC Driver has a noticeable drop in performance compared to similar
	projects that use the Microsoft Access 95 (Jet 3.0) ODBC Driver.
	
	CAUSE
	=====
	
	The Microsoft Access 97 ODBC driver correctly reads and uses the MaxBufferSize
	performance setting in the ODBC data source. For applications that deal with
	large amounts of database activity, the default MaxBufferSize setting of 512K
	may be too small and result in a performance loss. The default MaxBufferSize
	setting of 512 was designed for optimal performance when using Jet databases
	under normal conditions but will restrict the amount of memory allotted to the
	driver and impact performance when using the driver more aggressively.
	
	RESOLUTION
	==========
	
	Increase the MaxBufferSize setting to reduce the amount of swapping that is
	caused by the more restrictive high watermark of 512K. The MaxBufferSize setting
	can be pre-set in the ODBC datasource or set programmatically starting in Visual
	C++ version 5.0 using the SetOption method documented in the DAO SDK. Increasing
	the MaxBufferSize setting greatly improves performance when the database
	activity level is high by preventing frequent page swapping. Setting
	MaxBufferSize to 0 activates Jet's built-in mechanism to determine the high
	watermark. Please look at the MORE INFORMATION section below for details.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Microsoft Access 95 ODBC driver distributed with Microsoft Visual C++ 4.x
	and Microsoft Office 95 (version 3.00.xxxx) ignores the MaxBufferSize setting in
	the ODBC data source. Instead, it uses the Jet engine's default setting, which
	is determined based on the amount of physical RAM on the computer using the
	following formula:
	
	  ((Total Physical RAM in MB - 12 MB) / 4) + 512 KB
	
	For a computer with 32 MB of RAM:
	
	  ((32 MB - 12 MB / 4) + 512 KB = 5632 KB
	
	So when you use this driver, the MaxBufferSize setting is actually well over the
	default 512 KB in the data source.
	
	The Microsoft Access ODBC driver distributed with Visual C++ 5.0 and Microsoft
	Office 97 (version 3.50.xxxx) correctly reads and uses the 512 KB default
	setting from the ODBC data source. This means that the 3.50.xxxx driver is going
	to use a considerably smaller buffer than the 3.00.xxxx driver when used with
	the default settings. The impact on performance shows up after the driver has
	used up the 512 KB of memory and starts a cleanup thread to flush out the oldest
	buffer pages. If you are submitting a large amount of database requests
	(constantly inserting records, running queries or leaving open a large number of
	recordsets), the cleanup thread will eventually not manage to keep up with the
	amount of page swapping that has to happen. As a result, Jet begins to react
	more slowly to additional requests.
	
	To change the MaxBufferSize setting manually, double-click your Access database
	DSN in the ODBC Administrator. In the data source setup dialog box, click the
	"Options>>>" button to display the "Buffer Size" edit box and type in
	the new desired MaxBufferSize value there.
	
	REFERENCES
	==========
	
	For additional information on Jet performance settings such as MaxBufferSize,
	see Chapter 13 of the Microsoft Jet Database Engine Programmer's Guide
	(Microsoft Press).
	
	For information on setting the MaxBufferSize setting programmatically, search for
	the "SetOption Method" in the DAO SDK online help in Visual Studio 97.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbMFC kbODBC kbVC kbGrpDSVCDB MSGRAPH kbMDAC250 
	Technology        : kbVCsearch kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbMDACSearch kbMDAC250 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:2.5,4.2,5.0,95; winnt:3.5,3.51,4.0,4.0 SP4,5.0
	Issue type        : kbprb
	
	=============================================================================
	
