---
layout: page
title: "Q189410: HOWTO: Enable or Disable Connection Pooling in IIS 4.0"
permalink: /kb/189/Q189410/
---

## Q189410: HOWTO: Enable or Disable Connection Pooling in IIS 4.0

{% raw %}

	Article: Q189410
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSASP
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODBC connection pooling is enabled by default for ODBC drivers installed with
	Microsoft Option Pack 4.0. In Internet Information Server (IIS) 4.0 this setting
	is handled on a driver-by-driver basis. This article describes how to enable or
	disable this setting for any given ODBC driver.
	
	MORE INFORMATION
	================
	
	ODBC connection pooling is configured through a registry setting saved with the
	ODBC driver information. This can be found in the Windows registry at the
	following location:
	
	  \HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\<drivername>
	
	Where <drivername> is the name of the ODBC driver in question. Connection
	pooling is configured by setting the STRING value CPTIMEOUT to a non-zero value.
	This value is the number of seconds a connection is held in the pool before
	being discarded. Setting CPTIMEOUT to 0 disables connection pooling. If the
	CPTIMEOUT value does not exist, connection pooling will be disabled for that
	driver.
	
	REFERENCES
	==========
	
	For information on setting this value programmatically, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q164221 INF: How to Enable Connection Pooling in an ODBC Application
	
	  Q166083 INF: How to Enable Connection Pooling in an OLE DB Application
	
	======================================================================
	Keywords          : kbGrpDSASP 
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
