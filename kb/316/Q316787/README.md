---
layout: page
title: "Q316787: Invokable TP Registry Locations That Tpsetup.ex Creates"
permalink: /kb/316/Q316787/
---

## Q316787: Invokable TP Registry Locations That Tpsetup.ex Creates

{% raw %}

	Article: Q316787
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Transaction Program (TP) that can be invoked (called upon to start a
	conversation) by another TP is known as an "Invokable TP". Invokable TPs are
	generally server-type applications.
	
	A TP that is automatically started when invoked is known as an
	"autostarted invokable TP".
	
	Tpsetup.exe is a utility that is included with Host Integration Server (HIS) 2000
	and with the SNA Server 4.0 Software Development Kits (SDK). You can use
	Tpsetup.exe to install autostarted invokable TPs. Autostarted invokable TPs can
	be either queued or nonqueued.
	
	Queued and nonqueued TPs function differently:
	
	- When a queued TP is invoked multiple times, it loads one time and then queues
	  up requests after that to be dealt with one at a time.
	- When a nonqueued TP is invoked multiple times, it loads multiple times, one
	  time for every time that it is invoked.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you use the Tpsetup.exe program to install autostarted
	invokable TPs. The registry locations that Tpsetup.exe creates under different
	running environments are listed as follows.
	
	HIS Administrator Client with SNA Server 4.0 Windows NT Client:
	
	With SNABASE Running as a Service
	
	- With TP running as a service:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<TPNAME>\Parameters
	
	- With TP running as an application:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\TPs\<TPNAME>\Parameters
	
	With SNABASE Running as an Application
	
	- With TP running as a service:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\<TPNAME>\Parameters
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<TPNAME>
	
	- With TP running as an application:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SnaBase\Parameters\TPs\<TPNAME>\Parameters
	
	NOTE: The version of Tpsetup.exe that is included with Host Integraton Server
	(HIS) includes an extra parameter named <Accessible by All Users>. This
	parameter is checked by default with the HIS Administrator Client and cannot be
	modified. With the HIS End-User Client, this parameter is unchecked by default.
	
	Under HIS End-User Client:
	
	- With SNABASE running only as an application
	  With TP running only as an application (<Accessible by All Users>
	  unchecked)
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\SnaBase\Parameters\TPs\<TPNAME>\Parameters
	
	- With <Accessible by All Users> checked on HIS End-User Client
	  SNA Server 4.0 Windows 95, 98, ME Client
	  With SNABASE runs only as an application
	  With TP running only as an application
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SnaBase\Parameters\TPs\<TPNAME>\Parameters
	
	REFERENCES
	==========
	
	For more information, see the online books on this subject, and to the Software
	Development Kits for both HIS and SNA Server 4.0.
	
	For additional informationabout TPs and related topics, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q182576 NT Client Does Not Support Dynamic Definition of Invokable TPs
	
	  Q158515 Auto Started TP Is Not Invoked if TP Has Mixed-Case TP Name
	
	  Q151239 INFO: Invokable TP Written as an Application to Run as a Service
	
	  Q118382 Making and Running AREXEC/AREXECD Samples
	
	  Q118381 Making and Running APING/APINGD Samples
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
