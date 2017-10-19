---
layout: page
title: "Q280300: BUG: WithEvents Causes Events Not to Fire from WebClass"
permalink: /kb/280/Q280300/
---

## Q280300: BUG: WithEvents Causes Events Not to Fire from WebClass

	Article: Q280300
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbVBp600bug kbWebClasses kbGrpDSASP kbDSupport kbEvent
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the WithEvents keyword to handle events of an object within a
	Visual Basic 6.0 Internet Information Services (IIS) application (WebClass), the
	BeginRequest, EndRequest, and Start events of the WebClass fail to fire.
	
	CAUSE
	=====
	
	The WebClass runtime's events are being overridden. The WithEvents keyword
	causes the object to be bound to the same EventSink as the WebClass object. The
	WebClass object in the EventSink is overridden and removed by the new object. As
	a result, the BeginRequest, EndRequest, and Start events are not fired because
	the only object in the EventSink is the object declared as WithEvents and this
	object does not have these events.
	
	RESOLUTION
	==========
	
	In general, because Microsoft Active Server Pages (ASP) should process requests
	as fast as possible and return immediately to the client, you should not call
	components that are waiting for event notifications from other components. If
	you must use events within your WebClass application, wrap the object that is
	handling the events in a COM object that you can call from the WebClass.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information on ASP component guidelines, see the following page
	on the MSDN Online Web Workshop:
	
	  http://msdn.microsoft.com/workshop/server/asp/server01242000.asp
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q243546 PRB: ASP Does Not Support Events
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbVBp600bug kbWebClasses kbGrpDSASP kbDSupport kbEvent 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
