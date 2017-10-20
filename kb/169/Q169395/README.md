---
layout: page
title: "Q169395: PRB: Thread Safety for DAO/Jet"
permalink: /kb/169/Q169395/
---

## Q169395: PRB: Thread Safety for DAO/Jet

{% raw %}

	Article: Q169395
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC500 kbVC600
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Thread safety with Jet has been achieved with the release of DAO 3.5/3.6, but
	only for applications built with the _UNICODE switch. To use DAO 3.5/3.6 in a
	multi-threaded environment you need to use a class library (or other access
	mechanism) that is also thread-safe. Visual C++ offers two class libraries that
	use DAO: MFC DAO and the DAO SDK. Only the DAO SDK is itself thread-safe and
	therefore can use DAO 3.5/3.6 in a multi-threaded environment.
	
	NOTE: The DAO SDK is no longer available or supported. It is recommended that new
	code not use DAO but instead use Micrsoft ActiveX Data Objects (ADO) for
	multithreaded applications.
	
	CAUSE
	=====
	
	The Jet engine was originally written as a stand-alone desktop application, and
	originally conceived before thread-safety was as important as it is today. Jet
	3.5/4.0 itself is not thread-safe. However DAO 3.5/3.6 can implement
	thread-safety using Jet 3.5/4.0 within an apartment model, but only if your
	application is compiled with the _UNICODE switch and using the UNICODE version
	of the DAO SDK.
	
	Even with the DAO SDK and a UNICODE build, you need to create and terminate your
	DAO objects within the same thread. You must do this because Jet itself uses
	Visual Basic for Applications, which is also not thread-safe. You will encounter
	unexpected behavior if you try to pass DAO objects between threads.
	
	DAO 3.5/3.6 offers thread safety (under UNICODE builds) because it creates a
	separate instance of Jet for each thread.
	
	RESOLUTION
	==========
	
	If your application does not use _UNICODE (for example, it is built using ANSI),
	it will not be thread-safe and Jet will not behave correctly in a multi-threaded
	environment.
	
	In order for your application to use Jet correctly, the application and any
	mechanism using Jet must be thread-safe. There are two class libraries provided
	by Visual C++ for accessing DAO/Jet 3.5, but only one is thread- safe for
	_UNICODE builds.
	
	The DAO SDK library for Jet 3.5/4.0 is thread-safe, mainly because it has no
	internal state variables. The DAO SDK is just a very thin wrapper around the
	DAO/Jet Automation Server.
	
	MFC DAO, while modified to use Jet 3.5 if present on your machine, has not been
	modified to be thread-safe. It has a number of internal "state" variables that
	are not synchronized. Further, calls to critical operations such as database
	open and close have not been wrapped in any kind of critical section or lock to
	prevent re-entrance from other threads before completed. MFC ODBC, when rendered
	thread-safe, had a number of such critical sections "locked" in order to ensure
	synchronization by multiple threads. MFC DAO has no such implementation.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about creating multi-threaded applications using DAO 3.5,
	read the section "DAO and the Apartment-threading Model" in DAO SDK 3.5 online
	documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
