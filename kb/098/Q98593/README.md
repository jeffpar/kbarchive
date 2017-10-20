---
layout: page
title: "Q98593: Streams Development Environment"
permalink: /kb/098/Q98593/
---

## Q98593: Streams Development Environment

{% raw %}

	Article: Q98593
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Streams is a development environment for network transports found in recent
	versions of the UNIX operating system and a few other platforms, including
	Windows NT. It functions as would a set of APIs for developing or rapidly
	porting a network transport written in C, although it actually is privileged
	driver code talking to the UNIX kernel or, in the case of Windows NT, to various
	executive components. Streams on Windows NT is implemented as a kernel-level
	DLL.
	
	MORE INFORMATION
	================
	
	In Windows NT, the Streams environment has been enhanced to help deal with
	multiprocessing issues such as the synchronization of driver-level resources,
	which can be very complex in an SMP system. The NT extensions are based on and
	compatible with Streams extensions done by Sequent for their SMP version of UNIX
	(Dynix).
	
	Streams is commonly but inaccurately thought of as an interprocess communication
	method such as sockets. This is not so: Streams has nothing to do with the
	behavior of a network transport at the application layer or on the wire. A
	transport implemented in the Streams environment behaves like any other
	transport, and neither applications on a given system nor networking code on
	other systems can tell the transport is Streams-based.
	
	Streams is useful mostly to people who implement network protocol stacks because
	it allows them to port their code from one platform to another much more
	efficiently than would otherwise be possible.
	
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
