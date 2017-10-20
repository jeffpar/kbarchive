---
layout: page
title: "Q298648: CRTPKG Fails If Package Collection Includes Special Characters"
permalink: /kb/298/Q298648/
---

## Q298648: CRTPKG Fails If Package Collection Includes Special Characters

{% raw %}

	Article: Q298648
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Create Packages for DB2 (Crtpkg.exe) utility that is included with Host
	Integration Server 2000 fails to create DB2 packages on an AS/400 if the Package
	Collection (that is, the AS/400 Library) name in the Data Link Properties of the
	specified OLE DB data source contains any of the following special characters:
	
	- At sign (@)
	
	- Number sign (#)
	
	- Dollar sign ($)
	
	The Results windows in the Create Packages for DB2 utility contains the following
	when you try to create packages in an AS/400 Library (that is, LIB#1) that
	contains one or more of the specified special characters:
	
	Beginning creation process
	Initializing environment...
	Connecting to the host...
	Connection established.
	Start package creation process...
	Creating AUTOCOMMITTED (NC) package...
	AUTOCOMMITTED (NC) package created.
	Package creation succeeded.
	Errors occurred when granting privilege on MSNC001           .  RETCODE=-1.
	0 errors reported.
	Free statement handles...
	Disconnecting...
	Disconnected
	End of package creation.
	Creation process has completed
	
	CAUSE
	=====
	
	The OLE DB Provider for DB2 does not correctly parse Package Collection names
	that include the special characters that are listed in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
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
	
	+-----------------------------------+
	| File name  | Date       | Time    | 
	+-----------------------------------+
	| crtpkg.dll | 05/04/2001 | 10:20AM | 
	+-----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
