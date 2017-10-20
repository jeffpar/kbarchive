---
layout: page
title: "Q154624: XCON: Configuring the Site Connector Between Untrusted Domains"
permalink: /kb/154/Q154624/
---

## Q154624: XCON: Configuring the Site Connector Between Untrusted Domains

{% raw %}

	Article: Q154624
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure a site connector between two Exchange
	sites when the Exchange SITES are in untrusted Windows NT Domains. For
	demonstrative purposes the following terms will be used:
	
	  Domains D1 & D2 are the two untrusted domains
	
	  S1 and S2 are the two Exchange sites.
	
	There are two different scenarios described below, with different instructions
	for each.
	
	MORE INFORMATION
	================
	
	Scenario 1: Exchange Server S1 resides in Domain D1 and you are planning to
	install Exchange Server S2 in Domain D2.
	
	Use the following steps in order to ensure proper operation of the Site
	Connector:
	
	1. Find out what Windows NT service account was used during the installation of
	  Exchange Server S1 in Domain D1. It can be found by looking at the Service
	  Account Password tab on the Configuration Property page.
	
	2. The account information for this account may be something like the following:
	
	  Domain D1\Xservice with password of Password.
	
	3. Create an account in Domain D2 called Domain D2\Xservice. In other words,
	  create an account name in Domain D2 with exactly the same user name and
	  password as the account in Domain D1.
	
	4. Give this account "Access Computer from Network" user rights from the Windows
	  NT User Manager on both Exchange Servers.
	
	5. When installing Microsoft Exchange Server in Domain D2, use the account of
	  Domain D2\Xservice with the identical password.
	
	6. After the install process is complete, configure the site connector on both
	  sites S1 and S2, using the account Xservice on the override property page.
	
	Scenario 2:You already have installed Microsoft Exchange Servers in Sites S1 and
	S2, in their respective Domains D1 and D2. The Exchange Service Accounts used
	were different; for example, Xservice1 and Xservice2.
	
	Use the following steps to configure the Site Connector:
	
	1. Create an account called Xservice with an identical password in both Domains
	  D1 and D2.
	
	2. Run the Microsoft Exchange Administrator program and assign the account
	  created, that is, Xservice, the role of Service Account Administrator on both
	  the Site and Configuration Container. This needs to be done on both the
	  Exchange Servers.
	
	3. Give the XService account "Access Computer from Network" user rights from the
	  Windows NT User Manager on both Exchange Servers.
	
	4. Log on to the server where the site connector is going to be configured as
	  Xservice.
	
	5. Configure the Site Connector and use the account created on the override
	  property page. When asked to create the Site Connector for the other site, go
	  ahead and do so.
	
	NOTE: It is important to log on to the Exchange Server where the connector is
	going to be created as the Xservice account. Otherwise the account will need to
	be given access to the Local Administrators group which some administrators may
	consider a security risk.
	
	NOTE: When configuring a Site Connector on Microsoft Exchange Servers between
	Untrusted domains, make sure at least one of the servers is a Domain Controller.
	If one is a member server, you must configure the Site Connector from the member
	server.
	
	
	Additional query words: XCON Site Untrusted domains dom service Account override trust exfaqcon
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
