---
layout: page
title: "Q185093: FTP Server Fails to Transfer Files Larger Than 4 Gigabytes"
permalink: /kb/185/Q185093/
---

## Q185093: FTP Server Fails to Transfer Files Larger Than 4 Gigabytes

{% raw %}

	Article: Q185093
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FTP server fails to transfer files larger than 4 gigabytes from the FTP
	server to an FTP client or internally within the server.
	
	CAUSE
	=====
	
	This is a design limitation. By default, FTP is limited to a maximum of 4
	gigabytes transfer size.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Windows
	NT service pack.
	
	This fix should have the following time stamp:
	
	03/04/99  07:18p                50,448 admwprox.dll (Alpha)
	03/04/99  07:20p               549,136 asp.dll
	03/04/99  07:19p                77,072 coadmin.dll
	03/04/99  07:20p                17,168 ftpctrs2.dll
	03/04/99  07:20p               126,736 ftpsvc2.dll
	03/04/99  07:20p                89,360 httpodbc.dll
	03/04/99  07:19p                17,680 iisfecnv.dll
	03/04/99  07:19p               110,864 iislog.dll
	03/04/99  07:19p                25,872 infoadmn.dll
	03/04/99  07:19p               302,864 infocomm.dll
	03/04/99  07:19p                15,120 infoctrs.dll
	03/04/99  07:18p                82,704 isatq.dll
	03/04/99  07:19p                45,840 iscomlog.dll
	03/04/99  07:19p                16,656 iwrps.dll
	03/04/99  07:19p                23,312 lonsint.dll
	03/04/99  07:18p               131,856 metadata.dll
	03/04/99  07:19p                12,048 rpcref.dll
	03/04/99  07:19p                20,912 spud.sys
	03/04/99  07:19p                29,456 svcext.dll
	03/04/99  07:19p                21,264 w3ctrs.dll
	03/04/99  07:19p               381,712 w3svc.dll
	03/04/99  07:19p               149,264 wam.dll
	
	03/04/99  07:17p                28,224 admwprox.dll (i386)
	03/04/99  07:20p               328,512 asp.dll
	03/04/99  07:18p                43,456 coadmin.dll
	03/04/99  07:19p                11,168 ftpctrs2.dll
	03/04/99  07:19p                81,888 ftpsvc2.dll
	03/04/99  07:19p                55,392 httpodbc.dll
	03/04/99  07:18p                10,224 iisfecnv.dll
	03/04/99  07:18p                62,432 iislog.dll
	03/04/99  07:18p                16,848 infoadmn.dll
	03/04/99  07:18p               184,208 infocomm.dll
	03/04/99  07:18p                 9,584 infoctrs.dll
	03/04/99  07:17p                47,936 isatq.dll
	03/04/99  07:18p                29,520 iscomlog.dll
	03/04/99  07:19p                11,248 iwrps.dll
	03/04/99  07:18p                13,856 lonsint.dll
	03/04/99  07:17p                71,232 metadata.dll
	03/04/99  07:18p                 7,488 rpcref.dll
	03/04/99  07:18p                12,592 spud.sys
	03/04/99  07:18p                18,032 svcext.dll
	03/04/99  07:19p                14,752 w3ctrs.dll
	03/04/99  07:19p               227,424 w3svc.dll
	03/04/99  07:18p                87,504 wam.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: FTP Service IIS
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
