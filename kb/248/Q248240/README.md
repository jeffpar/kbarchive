---
layout: page
title: "Q248240: BUG: Using SourceSafe in Multiple Time Zones"
permalink: /kb/248/Q248240/
---

## Q248240: BUG: Using SourceSafe in Multiple Time Zones

{% raw %}

	Article: Q248240
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbConfig kbSSafe500bug kbSSafe600bug _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Visual SourceSafe in a development environment where users are
	accessing the same database from multiple time zones, Visual SourceSafe does not
	handle the conversion from one time zone to another properly.
	
	CAUSE
	=====
	
	Visual SourceSafe takes the timestamp off the client computer and uses that when
	doing any Visual SourceSafe functions. This time is not converted into anything
	global, like Universal Time Coordinate (UTC). This means that people in
	different time zones, working at the same time, look to Visual SourceSafe as if
	they are working at different times.
	
	RESOLUTION
	==========
	
	Synchronize the Times:
	
	Synchronize the dates and system clocks for all Visual SourceSafe client
	computers with the Visual SourceSafe server. This prevents check-in and
	check-out operations from appearing to happen out of sequence and effects any
	labels that are applied. Synchronizing dates and system clocks is particularly
	important when users from different time zones access the same database.
	
	You can set up a Windows NT Server to act as a Domain Time Source server for
	users to synchronize their local date and time with the network. For additional
	information, see the Knowledge Base article "How to Set Up and Synchronize with
	Domain Time Source Servers" listed below.
	
	SourceOffSite:
	
	There is a third-party utility that allows the timestamp from the server to be
	used for all Visual SourceSafe activity. This allows users to keep their system
	clocks in the proper time zone and Visual SourceSafe functions properly. See the
	"SourceOffSite" link below for more information from their Web site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	  Q150643 PRB: Setting Wrong System Date Causes Lost Project History
	
	  Q131715 How to Set Up And Synchronize with Domain Time Source Servers
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	SourceOffSite
	
	Additional query words:
	
	======================================================================
	Keywords          : kbConfig kbSSafe500bug kbSSafe600bug _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
