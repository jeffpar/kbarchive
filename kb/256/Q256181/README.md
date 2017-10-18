---
layout: page
title: "Q256181: Logo FAQ: Exposing Keyboard Focus in Remote-Control Utilities?"
permalink: kb/256/Q256181/
---

## Q256181: Logo FAQ: Exposing Keyboard Focus in Remote-Control Utilities?

	Article: Q256181
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenable kbOSWin2000 kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Do remote-control utilities, such as pcAnywhere and Carbon Copy, have to comply
	with guidelines to expose the keyboard focus location in order to receive
	Windows 2000 certification?
	
	Remote-control utilities are currently exempted from the requirement to expose
	the location of the keyboard focus on the host computer to software running on
	the client computer. This exemption will probably be removed in the future when
	various technical difficulties are resolved.
	
	MORE INFORMATION
	================
	
	Accessibility of any communication requires three components to cooperate and
	follow accessible-design guidelines:
	
	- The source of information must provide data needed by people with
	  disabilities.
	
	- The pipeline that transmits information must preserve the accessibility data
	  and provide it to the client software.
	
	- The client software must take the accessibility data and make it available to
	  the user or to accessibility aids running on the user's behalf. (It may also
	  have to explicitly request that the source provide this data.)
	
	Remote control applications consist of two components running on separate systems
	and communicating over a network or similar infrastructure. Typically, the user
	is working at one workstation where the client component of the utility allows
	him or her to see an image of what is appearing on a separate host computer. The
	user's input is gathered on the client computer and transmitted to the host,
	where it is simulated as if the user were working on the host computer. Then,
	any output is gathered on the host computer and transmitted to and displayed on
	the client computer. In this case, one might argue that a remote control utility
	is a client utility that is not getting accessibility information, such as the
	location of the keyboard focus on the host computer, and so cannot present it to
	the user. However, the remote control utility consists not only of a client
	portion but also the pipeline that gathers information on the host computer and
	transmits it over the network to its client component. Currently, it gathers and
	transmits information about what drawing objects appear on the screen. It is
	clear that it could, if necessary, also gather and transmit information about
	the keyboard focus location.
	
	Unfortunately, while it is easy to "remote" the focus once you know it, at this
	time it is very difficult for applications to track the focus properly in order
	to know what to remote. Therefore, requiring this would represent an undue
	burden on software applications, so at this time remote control applications are
	exempted from this requirement.
	
	This exemption applies only to remote-control applications. It does not represent
	a general exemption for all components that sit between some source of
	information and the user's operating environment. For example, the exemption
	would not permit applications that host COM objects to interfere with those
	objects' ability to comply with accessibility or certification guidelines.
	
	In the future, Microsoft may provide helper libraries that make it easier to
	track to focus. With such libraries in place, it is likely that remote control
	applications would be required to gather and transmit this data.
	
	Additional query words: kbWinOS2000logofaq
	
	======================================================================
	Keywords          : kbenable kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
