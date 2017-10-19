---
layout: page
title: "Q224293: Cluster Admin Extension Can't Remotely Administer IIS in Cluster"
permalink: /kb/224/Q224293/
---

## Q224293: Cluster Admin Extension Can't Remotely Administer IIS in Cluster

	Article: Q224293
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Information Server (IIS) Cluster Admin. Extension is not able to
	remotely administer an IIS computer in a Cluster. The Parameters tab does not
	appear on the IIS resource's properties screen.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  11/05/98  04:42p                27,696 Admwprox.dll  (x86)
	  11/05/98  04:45p                33,872 Clusiis4.dll  (x86)
	  11/05/98  04:42p                43,456 Coadmin.dll   (x86)
	  11/05/98  04:45p                65,664 Iisclex4.dll  (x86)
	
	  11/05/98  04:42p                49,424 Admwprox.dll  (Alpha)
	  11/05/98  04:44p                53,520 Clusiis4.dll  (Alpha)
	  11/05/98  04:42p                77,072 Coadmin.dll   (Alpha)
	  11/05/98  04:44p               114,960 Iisclex4.dll  (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Cluster Server.
	
	MORE INFORMATION
	================
	
	Please use the following procedures to apply the fix.
	
	On the IIS computers:
	
	1. Stop IIS.
	
	2. Copy the Clusiis4.dll to the %windir%\System32\Inetsrv directory.
	
	3. Restart IIS.
	
	On the Remote Cluster Admin. computer:
	
	1. Copy the Admwprox.dll to the %windir%\System32 directory.
	
	2. Copy Coadmin.dll and Iisclex4.dll to the %windir%\Cluster directory (or the
	  directory where the Remote Cluster Admin. is installed).
	
	3. Run Regsvr32 coadmin.dll and Regsvr32 iisclex4.dll in the above directory.
	
	
	Additional query words: 4.00 IIS MTS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbiisSearch kbAudDeveloper kbClustServSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
