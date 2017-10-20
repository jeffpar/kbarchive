---
layout: page
title: "Q161559: Executing Perl Scripts Generates 403 Access Forbidden Error"
permalink: /kb/161/Q161559/
---

## Q161559: Executing Perl Scripts Generates 403 Access Forbidden Error

{% raw %}

	Article: Q161559
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Perl, the following error message may appear when you execute
	a Perl script from the Scripts virtual directory:
	
	  HTTP/1.0 403 Access Forbidden (Read Access Denied - This Virtual
	  Directory does not allow objects to be read.)
	
	CAUSE
	=====
	
	During the installation of Perl, a registry entry is added to the following
	subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3Svc\Parameters
	  \Script Map\.pl : Reg_Sz : Path:\PerlIS.Dll
	
	This registry entry specifies that a file with the extension .pl can be executed
	in a virtual directory and calls the PerlIs.dll interpreter.
	
	WORKAROUND
	==========
	
	All Internet Services must be stopped and then restarted after installing Perl
	for Windows NT. The registry change will not take effect until the services have
	been restarted.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: IIS
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
