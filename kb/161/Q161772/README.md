---
layout: page
title: "Q161772: IBM CA/400 ODBC Driver Stops Receiving Large Query Responses"
permalink: /kb/161/Q161772/
---

## Q161772: IBM CA/400 ODBC Driver Stops Receiving Large Query Responses

	Article: Q161772
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the ODBC driver included with IBM Client Access/400 for Windows
	(V3R1M1) over the SNA Server 2.11 Windows 3.x client software, the ODBC driver
	may stop responding while receiving large query responses from the AS/400.
	
	While receiving data, the SNA Server Windows 3.x client APPC interface returns
	the following error to the CA/400 ODBC RECEIVE_IMMEDIATE call:
	
	  
	
	  primary_rc   = 0x0001        (AP_PARAMETER_CHECK)
	  secondary_rc = 0x00000006    (AP_INVALID_DATA_SEGMENT)
	
	CAUSE
	=====
	
	The IBM Client Access/400 ODBC driver passes a 32-bit address in the dptr "data
	pointer" parameter to the SNA Server Windows 3.x APPC RECEIVE_IMMEDIATE
	function. To protect against memory access violations, the SNA Server Windows
	3.x APPC interface attempts to verify that the calling application has access to
	the data pointer and address range supplied to the RECEIVE_IMMEDIATE function.
	During this verification check, the address is treated as a 16-bit address,
	causing the top 16 bits to be truncated, in turn causing the verification to
	fail.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With this update
	applied, if Client Access/400 is used (indicated by setting CA400=YES in the
	[WNAP] section of the Win.ini initialization file), the SNA Server Windows 3.x
	client disables address verification checking as described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11. This
	problem was corrected in the latest SNA Server version 2.11 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	
