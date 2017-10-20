---
layout: page
title: "Q139784: RUI_READ Enhancement for Receiving Large RUs"
permalink: /kb/139/Q139784/
---

## Q139784: RUI_READ Enhancement for Receiving Large RUs

{% raw %}

	Article: Q139784
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LUA RUI application issues an RUI_READ request and passes a data buffer
	that is smaller than the size of the RU being received, the RUI interface
	returns a primary_rc of LUA_UNSUCCESSFUL and secondary_rc = LUA_DATA_TRUNCATED.
	The RUI library returns as much data as possible to the application's data
	buffer, but the remaining data in the RU is thrown away and cannot be extracted
	on subsequent RUI_READ requests.
	
	This forces the RUI application to allocate an RUI_READ data buffer large enough
	to handle the full RU size.
	
	To work around this restriction, an update to SNA Server 2.11 now supports the
	ability for a Win32, Win 3.x and OS/2 RUI application to receive primary_rc =
	LUA_OK and secondary_rc = LUA_DATA_INCOMPLETE (0x00000060) on an RUI_READ call,
	so it can continue to repost new RUI_READs receive the remainder of the data.
	
	NOTE: This enhancement has not been accepted as part of the Microsoft WOSA LUA
	API standard.
	
	Microsoft has updated the following files for this enhancement:
	
	  Client Platforms     Updated Files
	  -----------------------------------------------------------
	  Win32 clients        <snaroot>\system\WINRUI32.DLL
	  Windows 3.x clients  <winroot>\system\WINRUI.DLL
	  OS/2 clients         <snaroot>\ACSRUI.DLL
	  MS-DOS clients       <sdk>\LIB\MSDOS\DOSACS.LIB
	  SDK file             \SDK\INC\WINLUA.H
	
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This new feature is enabled with an update to SNA Server 2.11 Service Pack 1. To
	enable this new feature, the Win32, Win 3.x or OS/2 RUI application must:
	
	- Set lua_resv56[3] to a non-zero value in the verb control block when calling
	  RUI_INIT during session establishment.
	
	- Look for primary_rc = LUA_OK and secondary_rc = LUA_DATA_INCOMPLETE
	  (0x00000060) when RUI_READ completes. If this occurs, the application should
	  repost a new RUI_READ to receive the next block of data, until the primary_rc
	  = LUA_OK and the secondary_rc = LUA_OK.
	
	If the LUA_DATA_INCOMPLETE is returned on an RUI_READ, any subsequent RUI_READ
	used to receive the remainder of the RU will contain the same transmission
	header (TH) and request/response header (RH). For example, if the RU is marked
	with the End Chain (EC) indicator and the first RUI_READ returns with
	LUA_DATA_INCOMPLETE, and the second RUI_READ returns the rest of the data, then
	on each RUI_READ the EC indicator is set by the RUI library in the verb control
	block.
	
	The following line should be added to the WINLUA.H file to support this new
	feature:
	
	     #define LUA_DATA_INCOMPLETE      LUA_FLIPL(0x00000060)
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
