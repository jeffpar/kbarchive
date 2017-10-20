---
layout: page
title: "Q230308: Contents of NNTP Service Release Notes"
permalink: /kb/230/Q230308/
---

## Q230308: Contents of NNTP Service Release Notes

{% raw %}

	Article: Q230308
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The More Information section of this article contains a copy of the NNTP Service
	Release Notes included with the Windows NT 4.0 Option Pack.
	
	The file containing these Release Notes is located at
	<%SystemRoot%>\Help\iis\htm\core\newsrel.htm.
	
	NOTE: The formatting and layout of the text below may vary slightly from the
	original.
	
	MORE INFORMATION
	================
	
	Microsoft NNTP Service Release Notes
	------------------------------------
	
	The following sections are included in this document:
	
	  Welcome to Microsoft NNTP Service
	  Using Microsoft NNTP Service Product Documentation
	  Hardware and Software Requirements
	  Installation
	  Client Software
	  Known Issues
	  Copyright Information
	
	Welcome to Microsoft NNTP Service
	---------------------------------
	
	Welcome to this Microsoft NNTP Service release. NNTP Service makes it easy for
	users to engage in discussions about any given topic. They can read articles
	from others who have similar interests, post articles, and join conversation
	threads about particular topics. This release features:
	
	- Secure Sockets Layer (SSL) support.
	
	- Open, cross-platform, Internet-based NNTP client support.
	
	- Secure authentication using NNTP security extensions that do not send user
	  passwords in clear text over the network.
	
	- Secure authentication that allows encrypted passwords to be transmitted over
	  the Internet.
	
	- Local, remote, and moderator-approved article posting.
	
	- Built-in support for control messages that can automatically create or delete
	  newsgroups as well as cancel postings.
	
	- Support for both private and public newsgroups.
	
	- Transaction logs for offline processing to collect usage statistics, track
	  messages and transactions, and examine usage patterns.
	
	- Newsgroup searching.
	
	- Support for Microsoft Index Server. For more information about Microsoft
	  Index Server see http://www.microsoft.com/ntserver/search/
	
	Using Microsoft NNTP Service Product Documentation
	--------------------------------------------------
	
	Context-sensitive help is available by clicking the Help button in a property
	sheet or in a dialog box. Additional documentation for Microsoft NNTP Service
	can be reached by selecting Product Documentation in the Microsoft Internet
	Information Server (IIS) program group.
	
	Hardware and Software Requirements
	----------------------------------
	
	This version of Microsoft NNTP Service has the same minimum hardware requirements
	as Windows NT Server version 4.0 and Microsoft Internet Information Server (IIS)
	version 4.0. It is important that you plan thoroughly before building your news
	service. To install and run Microsoft NNTP Service, the following software must
	be installed:
	
	- Microsoft Windows NT Server version 4.0
	
	- Microsoft Windows NT Service Pack 3 (or later), available in the \Support\qfe
	  directory on the installation compact disc or from
	  http://www.microsoft.com/ntserversupport/
	
	Installation
	------------
	
	Microsoft NNTP Service is installed as part of Microsoft Internet Information
	Server (IIS) 4.0. After Windows NT Service Pack 3 is set up, follow the
	installation instructions included with IIS 4.0. As part of the installation,
	select the "Microsoft NNTP Service" check box.
	
	Client Software
	---------------
	
	You can use any NNTP-compatible client, such as the Microsoft Internet Mail and
	News component of Microsoft Internet Explorer version 3.02 or 4.0. To enable
	security, you must use a client that supports secure sockets layer (SSL) or
	Windows NT Challenge/Response, such as Internet Mail and News.
	
	You can download Microsoft Internet Explorer from http://www.microsoft.com/ie. Be
	sure to download the Typical version of Internet Explorer, which includes
	Internet Mail and News. If you already have Internet Explorer but you are
	missing the Internet Mail and News reader, you can download it separately by
	following the features and components link.
	
	Known Issues
	------------
	
	RPC Locator Service Must be Started:
	
	The Remote Procedure Call (RPC) Locator service must be started if you are using
	the Internet Service Manager administration program.
	
	To start the RPC Locator service:
	
	1. From the Start menu, choose Settings and Control Panel.
	
	2. Select the Services application.
	
	3. In the Service box, select Remote Procedure Call (RPC) Locator, and then
	  choose Start.
	
	Unattended Option Pack Installation For Installing Microsoft NNTP Service:
	
	If you are using Microsoft Internet Information Server (IIS) on an intranet, you
	can copy the Unattend.txt file from the Windows NT Option Pack compact disc to a
	folder on the local computer and perform unattended installations from that
	folder. This is useful because Microsoft NNTP Service is not a default component
	during Setup. The Unattend.txt file is located on the compact disc in the \CPU
	type\inetsrv\directory, where CPU type is the processor on the computer where
	IIS will be installed.
	
	To start unattended setup:
	
	1. Copy Unattend.txt to your local drive and make any necessary changes to
	  install the appropriate components.
	
	2. Edit the [Components] section to include "iis_nntp = on" and "iis_nntp_docs =
	  on".
	
	3. At a command prompt, change to the directory on the compact disc that
	  contains Setup.exe and enter the following command:
	  "setup/u:<drive>:<path>\Unattend.txt" where <drive> is the
	  drive and <path> is the full path on the local computer where
	  Unattend.txt is located. For example:
	
	  setup/u:c:\temp\unattend.txt
	
	Using Moderated Newsgroups and SMTP:
	
	Postings to moderated newsgroups are sent to the moderator using SMTP with an
	empty Mail From: envelope line. For these messages to be received, the SMTP
	server must have an account set up to accommodate the requests.
	
	NNTP Service Manager (HTML):
	
	If NNTP Service Manager (HTML) does not start, type the following URL in your Web
	browser:
	
	  http://localhost/news/admin/default.htm
	
	Virtual Directories Terminology:
	
	Windows NT Server event logs use the term "virtual roots" to refer to virtual
	directories.
	
	Using WINS and Host Tables for Intranet Service:
	
	Although Domain Name System (DNS) is required to deploy Microsoft NNTP Service on
	the Internet, WINS or host tables can be substituted for DNS when using
	Microsoft NNTP Service on an intranet.
	
	Naming Newsgroups:
	
	It is recommended that you use 7-bit (lower ASCII) characters for newsgroup
	names.
	
	Registry Keys:
	
	The following preferences cannot be changed in the administration user interface.
	They can, however, be modified through the Windows NT Server registry. The
	Microsoft NNTP Service settings are located under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NNTPSvc\Parameters
	
	Settings that are not listed below should not be modified. The following is a
	brief description of the settings.
	
	+--------------------------------------------------------------------------------------------------------+
	| Key                   | Description                                           | Type      | Default    | 
	+--------------------------------------------------------------------------------------------------------+
	| NewsCrawlerTime       | Frequency of expiration cycle                         | REG_DWORD | 30 minutes | 
	+--------------------------------------------------------------------------------------------------------+
	| RejectGenomeGroups    | If TRUE, reject groups with funny names               | REG_DWORD | FALSE      | 
	+--------------------------------------------------------------------------------------------------------+
	| HistoryExpiration     | Time limit on message IDs in the history table        | REG_DWORD | 3 weeks    | 
	+--------------------------------------------------------------------------------------------------------+
	| HonorClientMessageIDs | If TRUE, honor client message IDs on POSTs            | REG_DWORD | TRUE       | 
	+--------------------------------------------------------------------------------------------------------+
	| GenerateErrFiles      | If TRUE, move bad articles received into .err files   | REG_DWORD | TRUE       | 
	+--------------------------------------------------------------------------------------------------------+
	| HonorApprovedHeader   | If TRUE, validate approved header for moderated posts | REG_DWORD | TRUE       | 
	+--------------------------------------------------------------------------------------------------------+
	
	Web Administration Authentication:
	
	An authenticated connection is required to administer Microsoft NNTP Service
	using a Web browser. The default authentication mechanism is Windows NT
	Challenge/Response. If you use a browser that does not support Windows NT
	Challenge/Response, IIS server settings for the Web administration directory
	must be changed.
	-------------------------------------------------------------------------------
	
	Copyright Information
	---------------------
	
	(C) 1997 Microsoft Corporation
	
	These materials are provided "as-is," for informational purposes only.
	
	Neither Microsoft nor its suppliers makes any warranty, express or implied with
	respect to the content of these materials or the accuracy of any information
	contained herein, including, without limitation, the implied warranties of
	merchantability or fitness for a particular purpose. Because some
	states/jurisdictions do not allow exclusions of implied warranties, the above
	limitation may not apply to you.
	
	Neither Microsoft nor its suppliers shall have any liability for any damages
	whatsoever including consequential, incidental, direct, indirect, special, and
	lost profits. Because some states/jurisdictions do not allow exclusions of
	implied warranties, the above limitation may not apply to you. In any event,
	Microsoft's and its suppliers' entire liability in any manner arising out of
	these materials, whether by tort, contract, or otherwise shall not exceed the
	suggested retail price of these materials.
	
	Additional query words: iis kbreadme readme newsrel.htm newsrel network news transport protocol akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
