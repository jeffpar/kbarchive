---
layout: page
title: "Q307819: BUG: Problems with Automated Installation of HIS Clients"
permalink: /kb/307/Q307819/
---

## Q307819: BUG: Problems with Automated Installation of HIS Clients

{% raw %}

	Article: Q307819
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using .INF files to perform automated installations of the Host Integration
	Server (HIS) 2000 client software, several registry settings may be set
	incorrectly. These problems occur only when performing automated installations
	of the HIS 2000 client software. If an HIS 2000 client is installed through the
	standard interactive installation method, these problems do not occur.
	
	The following problems may be experienced when using an .INF file to install the
	HIS 2000 End-User Client:
	
	- AcceptBackupInfo key is created, but contains no actual value.
	
	- AcceptSponsorListUpdate key is created, but contains no actual value.
	
	- AutoTerminate key is created, but contains no actual value.
	
	- ShowIcon key is created, but contains no actual value.
	
	- TerminationTimeout key is created, but always contains a value of zero.
	
	- RandomSponsor key is created, but always contains a value of zero.
	
	- SnaDomain key is created and populated with the local computer name if left
	  blank in the .INF file.
	
	The following problems may be experienced when using an .INF file to install the
	HIS 2000 Administrator Client:
	
	- AcceptBackupInfo key is not created.
	
	- AcceptSponsorListUpdate key is not created.
	
	- RandomSponsor key is not created.
	
	- ShowIcon key is not created.
	
	- TerminationTimeout key is not created.
	
	- RunAsService key is created but is always set to zero.
	
	- AutoTerminate key is created, but contains no actual value.
	
	CAUSE
	=====
	
	The Microsoft Installer files (.MSI) for the HIS 2000 End-User Client and
	Administrator Client installations do not properly handle all of the entries in
	the .INF file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	
	MORE INFORMATION
	================
	
	The valid entries for the .INF files are documented in the HIS 2000 Online Books
	under the topic "Installation and Configuration\Automating Setup."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
