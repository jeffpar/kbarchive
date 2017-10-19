---
layout: page
title: "Q276319: Adsiis.dll Leaks Memory Because of Unreleased String Allocation"
permalink: /kb/276/Q276319/
---

## Q276319: Adsiis.dll Leaks Memory Because of Unreleased String Allocation

	Article: Q276319
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you get the properties of a user object in a script by using Active
	Directory Services Interface (ADSI), some memory may be leaked for each
	iteration of the script.
	
	CAUSE
	=====
	
	The getproperty method in the CPropertyCache class does not release an allocated
	BSTR data-type string. Therefore, 20 bytes are leaked each time the function is
	called.
	
	RESOLUTION
	==========
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version    Size     File name     Platform
	  ---------------------------------------------------------------
	  01/10/2001  12:20pm  4.02.0755  214,544  Adsiis.dll    Intel
	  01/10/2001  12:21pm  4.02.0755  330,672  Asp.dll       Intel  
	  01/10/2001  12:20pm  4.02.0755   55,904  Httpodbc.dll  Intel
	  01/10/2001  12:20pm  4.02.0755   98,912  Iischema.dll  Intel
	  01/10/2001  11.31am              28,851  Iiscnfg.h     Intel
	  01/10/2001  12:19pm  4.02.0755  185,792  Infocomm.dll  Intel  
	  01/10/2001  12:20pm  4.02.0755   38,256  Ssinc.dll     Intel          
	  01/10/2001  12:21pm  4.02.0755   25,360  Sspifilt.dll  Intel 
	  01/10/2001  12:21pm  4.02.0755  229,008  W3svc.dll     Intel  
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
