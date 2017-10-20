---
layout: page
title: "Q243796: Pswd. Required with App. Override Sec. &amp; Persistent Verification"
permalink: /kb/243/Q243796/
---

## Q243796: Pswd. Required with App. Override Sec. &amp; Persistent Verification

{% raw %}

	Article: Q243796
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): _IK kbsna400sp3
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP3 
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes persistent verification authentication when LU6.2
	connectivity is employed for mainframe communications.
	
	In the COM Transaction Integrator (COMTI) Remote Environment Security properties,
	a user may choose to "Allow the application to override the selected
	authentication." Additionally, a user may opt to "Use Already Verified or
	Persistent Verification authentication". (Properties on the mainframe determine
	which of the two, Already Verified or Persistent Verification, will be used.
	This is settled at the time a LU 6.2 session is bound.)
	
	Persistent Verification authentication means that after a session is bound, the
	first transaction request (ATTACH) must contain both a user ID and a password.
	Subsequent ATTACHes on that session need only the user ID. On the mainframe, a
	security check is required only the first time so that there is a reduction in
	the mainframe overhead of security-checking for the subsequent transaction
	requests.
	
	Despite this, when the client is using application override security, the client
	callback mechanism must supply both a user ID and the password for every
	transaction. The rationale for this requirement is that it precludes a security
	risk: It is considered too easy to guess mainframe user IDs, which is a problem
	when no password is required. Nevertheless, SNA Server sends the password on
	only the first ATTACH for a given session.
	
	MORE INFORMATION
	================
	
	COMTI cannot tell which mode of security has been negotiated between the partner
	LUs nor whether the present transaction is the first for the given LU 6.2 APPC
	session. Therefore, the application must always supply both the user ID and
	password.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q222121 Enhanced Security When Using Persistent Verification
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP3 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
