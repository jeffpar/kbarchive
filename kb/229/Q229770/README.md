---
layout: page
title: "Q229770: PRB: CoGetClassObject for IClassFactory2 Returns E_NOINTERFACE"
permalink: /kb/229/Q229770/
---

## Q229770: PRB: CoGetClassObject for IClassFactory2 Returns E_NOINTERFACE

{% raw %}

	Article: Q229770
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCOMPlus kbCOMt kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the CoGetClassObject function for the IClassFactory2 interface on
	components that are hosted in a COM+ application, the function fails with error
	0x80004002 ("No such interface supported" or E_NOINTERFACE).
	
	CAUSE
	=====
	
	This error occurs because the class factory wrapper for configured components
	only supports the IClassFactory interface, not the IClassFactory2 interface.
	
	Additional query words: 0x80004002
	
	======================================================================
	Keywords          : kbCOMPlus kbCOMt kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
