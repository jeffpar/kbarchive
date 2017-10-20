---
layout: page
title: "Q268095: SMS: Modifying ProviderForLocalSite Value Causes MMC to Fail"
permalink: /kb/268/Q268095/
---

## Q268095: SMS: Modifying ProviderForLocalSite Value Causes MMC to Fail

{% raw %}

	Article: Q268095
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsProvider
	Last Modified: 31-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to the Systems Management Server 2.0 site via the
	Systems Management Server Administrator console, you may receive the following
	error message:
	
	  Connection Failed!
	
	CAUSE
	=====
	
	If the SMSProvider_Location value in the Repository is changed from TRUE to
	FALSE, this causes any Microsoft Management Console (MMC) snap-in that was
	created after the change to fail to connect. The MMC interprets the FALSE value
	as NO, therefore causing the connection to fail.
	
	NOTE: Microsoft recommends that you avoid making manual changes to the values
	listed in ProviderForLocalSite. This article discusses a situation that can
	occur if this value is changed. Improperly modifying this value can cause a
	disruption of normal Systems Management Server operations.
	
	WORKAROUND
	==========
	
	1. On the Start menu, click Run.
	
	2. Type "wbemtest" (without the quotation marks), and then click Connect.
	
	3. In the Server\Namespace field, type "\\servername\root\sms" (without the
	  quotation marks) (where servername is the Windows NT name of your Systems
	  Management Server Site server).
	
	4. Click Login, click Enum classes, click Recursive, and then click OK.
	
	5. Wait for a result (a list of data) and then scroll to the bottom of the
	  result and double-click SMS_ProviderLocation.
	
	6. Click the Instances option.
	
	  This brings up SMS_ProviderLocation.SiteCode=XXX (where XXX represents your
	  site code).
	
	7. Double-click ProviderForLocalSite, and change the Value from FALSE to TRUE.
	
	8. Click Save Property, and then click Save Object until WBEMTEST closes.
	
	9. Start the Systems Management Server Administrator console and attempt to
	  connect
	.
	
	MORE INFORMATION
	================
	
	The Administrator console is hosted by the Microsoft Management Console (MMC), a
	framework for hosting management tools. A console file (that has an extension
	.msc) is used to define the contents of the MMC, and can be customized for
	particular tasks. The .msc file stores the location of the SMS Provider Server.
	
	SMS Providers are Web-based enterprise management (WBEM) providers that act as
	intermediaries between CIMOM and one or more managed objects. When CIMOM
	receives a request from a management application for data that is not available
	from the CIMOM repository, or for notifications of events that CIMOM does not
	support, it forwards the request to a provider. Providers supply data and event
	notifications for managed objects that are specific to their particular domain.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
