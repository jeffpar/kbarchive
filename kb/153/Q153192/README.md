---
layout: page
title: "Q153192: IIS Queries Against Oracle Datasource Cause Access Violations"
permalink: /kb/153/Q153192/
---

## Q153192: IIS Queries Against Oracle Datasource Cause Access Violations

	Article: Q153192
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run queries against an Oracle datasource using Internet Information
	Server (IIS), you may get access violations in Orant71.dll or Ora72.dll.
	
	CAUSE
	=====
	
	There is a problem relating to thread initialization with the Oracle SQL*Net
	drivers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0 and 2.0. There is a fix for this problem that has not been
	regression-tested. Contact Microsoft Product Support Services for more
	information.
	
	Additional query words: iis hotfix
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0
	
	=============================================================================
	
