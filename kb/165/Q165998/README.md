---
layout: page
title: "Q165998: Cold Fusion Applications Bypass Security"
permalink: /kb/165/Q165998/
---

## Q165998: Cold Fusion Applications Bypass Security

	Article: Q165998
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cold Fusion template files that should be only accessible to authenticated users
	are also getting returned to other users.
	
	CAUSE
	=====
	
	The Cold Fusion ISAPI dll file is running in a manner that does not preserve the
	user context. Therefore, it allows the cfm file to run solely based on the
	permissions assigned the Cold Fusion dll (Iscf.dll) file.
	
	WORKAROUND
	==========
	
	Allaire is working on a new version of the .dll file (maintenance fix 2.02) that
	will resolve the problem.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft. We make no warranty, implied or otherwise, regarding performance
	or reliability of these products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
