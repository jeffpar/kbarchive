---
layout: page
title: "Q197762: Windows NT ResKit WebAdmin Tool Cannot Change Password from BDC"
permalink: kb/197/Q197762/
---

## Q197762: Windows NT ResKit WebAdmin Tool Cannot Change Password from BDC

	Article: Q197762
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Three 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Resource Kit WebAdmin tool fails to change user passwords
	when installed on a backup domain controller (BDC).
	
	CAUSE
	=====
	
	The WebAdmin tool does not properly detect the primary domain controller (PDC)
	to forward password change requests.
	
	RESOLUTION
	==========
	
	The WebAdmin tool was updated to properly detect the primary domain controller
	for a domain and forward the password change requests.
	
	A supported fix that corrects this problem is now available from Microsoft. If
	you are not severely affected by this specific problem, Microsoft recommends
	that you wait for the next Windows NT Resource Kit Update.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  11/17/98  12:29p               224,016 Ntadmin.dll   (x86)
	
	This hotfix has been posted to the following Internet location as Webad20.exe:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/webadmin/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource kit version
	4.0.
	
	Additional query words: 4.00 rkit
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
