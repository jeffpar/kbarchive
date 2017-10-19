---
layout: page
title: "Q111333: Errors on Token Ring Network with Banyan Vines 5.52 and WFWG"
permalink: /kb/111/Q111333/
---

## Q111333: Errors on Token Ring Network with Banyan Vines 5.52 and WFWG

	Article: Q111333
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups adds NDISBAN.COM to your AUTOEXEC.BAT file. If you have a
	token ring configuration, this entry causes the following errors to occur when
	you start your system:
	
	- Vines NDIS interface error 1010- NDISBAN.DOC
	
	  -and-
	
	- Error 5739 the Protocol Manager has reported an incompatible MAC driver
	
	CAUSE
	=====
	
	Banyan VINES version 5.52 (rev.5) uses NDTOKBAN.COM instead of NDISBAN.COM for
	NDIS token ring support. If you have the wrong file (NDISBAN.COM) in your
	AUTOEXEC.BAT file, the errors occur. The errors also occur if you have both
	files in your AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	To work around this problem, remove NDISBAN.COM from your AUTOEXEC.BAT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.11 5.52 (5) 5.52.5 err msg 3rdparty revision
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
