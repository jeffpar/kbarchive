---
layout: page
title: "Q191038: INFO: WebClass Initialize, BeginRequest, Terminate Events"
permalink: /kb/191/Q191038/
---

## Q191038: INFO: WebClass Initialize, BeginRequest, Terminate Events

{% raw %}

	Article: Q191038
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WebClass Initialize, BeginRequest, EndRequest, and Terminate events may fire
	more than once when starting and stopping a WebClass application. You need to
	take this into consideration when putting code inside these events.
	
	MORE INFORMATION
	================
	
	WebClass Object
	---------------
	
	The WebClass run-time is not loaded when the Initialize event is fired so you
	cannot access any part of the WebClass object in that event. The WebClass
	run-time has already been terminated when the Terminate event is fired so you
	cannot access any part of the WebClass object in that event.
	
	Events Firing
	-------------
	
	The initialize event occurs when an end user accesses the .asp (Active Server
	Pages) file that acts as the host for your IIS application. In the Initialize
	event, the WebClass is created as an object. This is always the first event in
	the WebClass's lifetime. The WebClass run-time is not loaded when the Initialize
	event is fired so you cannot access any part of the WebClass object in that
	event.
	
	NOTE: If the StateManagement property for the WebClass is set to wcNoState, the
	WebClass fires the Initialize event each time it receives an HTTP request. See
	"State Management in IIS Applications" for more information about setting the
	StateManagement property.
	
	The BeginRequest event is the next event called after the Initialize event when
	the user starts the application, and is also fired each time the WebClass
	receives a subsequent request from the browser. This event marks the beginning
	of processing for an HTTP request. You might use this event to perform
	processing required for every request the WebClass will perform. For example,
	you could use BeginRequest to retrieve state information from a database or to
	verify user information before processing a request.
	
	NOTE: The WebClass fires the BeginRequest event each time it receives an HTTP
	request.
	
	The Start event generally occurs the first time BeginRequest is fired in the
	application. It is not fired on subsequent requests. This event is generally
	used to send an initial response to the browser, launching the Respond event for
	the specified webitem.
	
	NOTE: If the end user specifies a webitem and event in the initial URL they use
	to launch the application, the WebClass does not fire the Start event. In this
	case, the specified event would be the first event fired. See "Setting the Start
	Event" for more information.
	
	The EndRequest event occurs when the WebClass has finished processing an HTTP
	request and has returned a response to the client. The processing of an event
	might require the WebClass to process several templates or webitems and their
	associated event procedures before a response is returned to the client.
	
	NOTE: The WebClass fires the EndRequest event each time it receives an HTTP
	request.
	
	The Terminate event tells the run-time DLL to destroy the instance of the
	WebClass. The WebClass run-time has already been terminated when this event is
	fired so you cannot access any part of the WebClass object in that event.
	
	NOTE: If the StateManagement property for the WebClass is set to wcNoState, the
	WebClass fires the Terminate event each time it sends a HTTP response to the
	browser. If the StateManagement property for the WebClass is set to
	wcRetainInstance, the WebClass fires the Terminate event only after their is a
	call the to ReleaseInstance method.
	
	Example
	-------
	
	For this sample, there are three HTTP requests going from the browser to the
	server to show the page:
	
	- If StateManagement=wcRetainInstance the BeginRequest, EndRequest will be
	  fired three times and the initialize event will be fired once with NO
	  Terminate event because the ReleaseInstance method was not called.
	
	- If StateManagement=wcNoState the BeginRequest, Initialize, EndRequest,
	  Terminate will all be fired three times.
	
	REFERENCES
	==========
	
	Please see the following Microsoft Knowledge Base article for more information
	on WebClasses:
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
