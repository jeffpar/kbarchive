---
layout: page
title: "Q253146: Tuning the Performance and Scalability of ASP Web Applications"
permalink: /kb/253/Q253146/
---

## Q253146: Tuning the Performance and Scalability of ASP Web Applications

{% raw %}

	Article: Q253146
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbIIS kbiis500
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides some generic information about possible
	performance-enhancement settings that may be helpful to tune Internet
	Information Server (IIS) 5.0. The default settings for Internet Information
	Services 5.0 are adequate for most uses. When you host sites serving a large
	number of users, tuning the parameters listed in the "More Information" section
	of this article may help to increase performance. All changes should be verified
	on a test computer before you make changes to a production computer.
	
	MORE INFORMATION
	================
	
	AspProcessorThreadMax:
	
	The AspProcessorThreadMax metabase property specifies the maximum number of
	worker threads per processor that IIS creates. The setting can dramatically
	influence the scalability of your Web applications and the performance of your
	server in general. Because it defines the maximum number of ASP requests that
	can run simultaneously, this setting should remain at the default unless your
	ASP applications are making long-running calls to external components. By
	default, AspProcessorThreadMax is set to 25.
	
	AspRequestQueueMax:
	
	The AspRequestQueueMax metabase property specifies the maximum number of
	concurrent ASP requests that are permitted into the queue. Any client browsers
	attempting to request ASP files when the queue is full are given an HTTP 500
	"Server too busy" error message. By default, AspRequestQueueMax is set to 3000.
	
	AspQueueConnectionTestTime:
	
	IIS places all ASP requests into a queue. If the request has been queued for
	longer than the number of seconds specified by the AspQueueConnectionTestTime
	metabase property, ASP checks to determine whether the client is still connected
	before it executes the request. If the client is no longer connected, the
	request is not processed and is deleted from the queue. You can use the
	AspQueueConnectionTestTime metabase property to make sure that IIS does not
	waste time processing a request that has been abandoned by the user. By default,
	AspQueueConnectionTestTime is set to 3.
	
	AspScriptEngineCacheMax:
	
	The AspScriptEngineCacheMax property specifies the maximum number of scripting
	engines that ASP pages will keep cached in memory. By default,
	AspScriptEngineCacheMax is set to 125.
	
	AspSessionTimeOut:
	
	The AspSessionTimeOut property specifies the default amount of time (in minutes)
	that a session object is maintained after the last request associated with the
	object is made. AspSessionTimeOut can be used to tune your ASP applications.
	Because session objects consume some memory resources, limiting the lifetime of
	an individual session with this property makes your applications more scalable.
	By default, AspSessionTimeOut is set to 20.
	
	WARNING: Modifying the metabase incorrectly can cause serious problems that may
	require you to reinstall IIS 5.0. Microsoft cannot guarantee that problems
	resulting from incorrectly modifying the metabase can be resolved. Modify the
	metabase at your own risk.
	
	Run the Adsutil.vbs utility from the <%SYSTEMDRIVE%>\inetpub\adminScripts
	directory. For example, to reconfigure the AspRequestQueueMax metabase property,
	type the following command:
	
	  adsutil.vbs set w3svc/AspRequestQueueMax <NewValue>
	
	Where <NewValue> is the number of requests that ASP should use per
	processor.
	
	Note: For all entries, these settings change the value at the Master WWW
	Properties level, where they are inherited by all new Web applications and all
	existing applications that have not explicitly set a different value.
	
	REFERENCES
	==========
	
	  Q238583 How to Tune the ASPProcessorThreadMax
	
	  Q233477 PRB: Session.Timeout Has a Max of 24 Hours
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIIS kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
