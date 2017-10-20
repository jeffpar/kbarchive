---
layout: page
title: "Q137555: OLE Controls and Control Containers Guidelines"
permalink: /kb/137/Q137555/
---

## Q137555: OLE Controls and Control Containers Guidelines

{% raw %}

	Article: Q137555
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ole-cont.exe is a file that contains a document in Microsoft Word version 6.0
	for Windows format that provides guidelines for implementing OLE controls and
	containers that will inter-operate well with other controls and containers.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  OLE-Cont.exe
	  (http://download.microsoft.com/download/fox30pro/info/1/WIN98/EN-US/OLE-Cont.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Following is an overview from the document:
	
	The purpose of this document is to provide guidelines for implementing OLE
	controls and containers that will interoperate well with other controls and
	containers. This document defines the minimum set of interfaces, methods, and
	features that are required of OLE Controls and Containers to accomplish seamless
	and useful interoperability.
	
	These guidelines define the minimum set of functionality that is required of a
	control and container; it therefore also describes the minimum set of
	functionality that a control can expect of a container and vice versa. This
	enables controls and container developers to assume a standard set of
	functionality and to reasonably rely on the existence of that functionality. Of
	course, OLE standard return-checking conventions should always be followed.
	
	There are many optional features that OLE controls and OLE control containers can
	choose to implement, which may or may not be essential to correct operation of
	the control or container. Some optional features are grouped into function
	groups. A control or a control container can choose to implement any of these
	function groups; function groups are not cumulative, so a control or container
	can support one group without necessarily supporting another. It is important
	for a control or container to degrade gracefully if a feature or function group
	it uses is not available. If an optional feature that is essential for correct
	operation is not available, then the control or container should alert the user
	and/or should not instantiate itself.
	
	It is important for controls and containers that require optional features (or
	features specific to a certain container) to be marketed and packaged as such.
	For example, a control that requires Visual Basic's data-bound list box should
	be marketed as a Visual Basic-specific control because it cannot run in other
	containers.
	
	These guidelines explicitly define those features, interfaces, methods, and
	properties that are mandatory for OLE controls and control containers. Any
	feature, interface, method, property, or function group that is not explicitly
	stated as mandatory in these guidelines should be considered optional.
	
	Additional query words: OLE-Cont
	
	======================================================================
	Keywords          : kbfile kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
