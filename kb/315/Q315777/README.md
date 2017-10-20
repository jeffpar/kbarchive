---
layout: page
title: "Q315777: Event 744 or SnaBase Failure When Using Active Directory"
permalink: /kb/315/Q315777/
---

## Q315777: Event 744 or SnaBase Failure When Using Active Directory

{% raw %}

	Article: Q315777
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 10-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SnaBase logs the following event in the Application Event Log on a Host
	Integration Server (HIS 2000) system that is configured to support Active
	Directory clients if the overall length of the organizational unit (OU) name is
	longer than 255 characters or if any individual node length in the OU name is
	longer than 64 characters:
	
	  Event ID: 744
	  Source: SNA Base Service
	  Description: DMOD initialization for Active Directory failed.
	
	SnaBase on an HIS 2000 Admin Client that is configured to "Locate servers using
	Active Directory" terminates after it logs the Event 744 when this problem
	occurs. SnaBase on an HIS 2000 End User Client that is configured to "Locate
	servers using Active Directory" terminates without any error messages when the
	problem occurs.
	
	CAUSE
	=====
	
	The HIS 2000 Resource Location Wizards fail to validate the overall length of
	the configured OU name. In addition, the Wizards fail to validate the lengths of
	the individual node names that the OU name is comprised of.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
