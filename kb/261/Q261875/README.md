---
layout: page
title: "Q261875: XADM: Original Domain Controller Needed for New User Attribubtes"
permalink: /kb/261/Q261875/
---

## Q261875: XADM: Original Domain Controller Needed for New User Attribubtes

{% raw %}

	Article: Q261875
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Active Directory Connector (ADC) for Microsoft Exchange
	Server 5.5 Service Pack 3 (SP3) on a Microsoft Windows 2000-based computer, you
	may experience the following behavior:
	
	In the Active Directory Users and Computers snap-in, two new tabs appear in User
	Account Properties. These tabs, the Exchange General and E-mail Addresses tabs,
	are visible only on the domain controller on which the ADC was installed.
	
	CAUSE
	=====
	
	This behavior can occur if the other domain controllers do not have the
	Microsoft Active Directory Connector Management components installed. Therefore,
	they are unable to view the two new user attributes.
	
	RESOLUTION
	==========
	
	To resolve this issue, it is necessary to install the Microsoft Active Directory
	Connector Management components on every domain controller on which you want to
	be able to view the attributes.
	
	To install the Active Directory Connector Management components, follow these
	steps:
	
	1. Double-click Setup.exe in the ADC folder.
	
	  NOTE: On the Microsoft Windows 2000 Server compact disc, Setup.exe is found in
	  \Valueadd\Msft\Mgmt\Adc.
	
	2. After ADC Setup initializes, click Component Selection, and then select only
	  the Microsoft Active Directory Connector Management components box.
	
	  You do not need to install the Microsoft Active Directory Connector Service
	  component.
	
	3. Click Next, and then click Finish to complete the ADC setup.
	
	Exchange Server does not need to be installed on the domain controllers to view
	these new user attributes.
	
	Additional query words: ADC W2K
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbwin2000ProSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:; winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
