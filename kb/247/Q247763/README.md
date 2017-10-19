---
layout: page
title: "Q247763: Cluster Administrator May Hang Creating New IIS Server Instance"
permalink: /kb/247/Q247763/
---

## Q247763: Cluster Administrator May Hang Creating New IIS Server Instance

	Article: Q247763
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbiis400bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Cluster Administrator may stop responding when adding a new Microsoft
	Internet Information Server (IIS) Instance after Windows NT 4.0 Service Pack 4
	has been applied to the cluster nodes.
	
	CAUSE
	=====
	
	The Cluster Administrator stops responding (Clusadmin.exe) because of a Second
	Chance (non-recoverable) Access Violation in the Cluster Resource Monitor
	(Resrcmon.exe). The Access Violation in Resrcmon.exe causes Remote Procedure
	Call (RPC) failures in Clusadmin.exe while trying to execute code in
	Resrcmon.exe. The RPC failures causes Clusadmin.exe to stop responding as
	Clusadmin.exe continually tries to execute code in the failing Resrcmon.exe.
	
	The Second Chance Access Violation occurs when the IIS 4.0 resource monitor
	extension (Clusiis4.dll) attempts to build the meta data path to the new site on
	the node so that all the property changes can be remotely transferred to nodes
	in the cluster per the Windows NT Service Pack 4. This design change is
	described in the following Knowledge Base article:
	
	  Q224293 IIS Cluster Admin. Extension Cannot Remotely Administer IIS in a
	  Cluster
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
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
	
	  Date        Time    Version      Size    File name     Platform
	  ---------------------------------------------------------------
	  12/03/1999  04:57p  4.2.734.1    33,872  clusiis4.dll  i386
	  12/03/1999  04:53p  4.2.734.1    53,520  clusiis4.dll  alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400bug 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
