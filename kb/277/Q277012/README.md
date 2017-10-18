---
layout: page
title: "Q277012: DirectX: List of New Features Included in Microsoft DirectX 8.0"
permalink: kb/277/Q277012/
---

## Q277012: DirectX: List of New Features Included in Microsoft DirectX 8.0

	Article: Q277012
	Product(s): Microsoft Home Games
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows Millennium Edition 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the new features that are included in the
	Microsoft DirectX 8.0 SDK. This list is by no means complete. For additional
	information, please refer to the documentation included in the DirectX SDK.
	
	MORE INFORMATION
	================
	
	DirectX 8.0 is composed of the following five components:
	
	   - DirectX Audio - an accelerated audio/music interface
	- DirectX Graphics - an accelerated graphics interface
	- DirectInput - a streamlined input device interface
	- DirectPlay - a multi-player gaming interface
	- DirectShow - an accelerated media playback interface
	
	New DirectX Audio features include:
	
	Microsoft DirectX Audio version 8.0 provides a new architecture for integrated
	music and sound effects playback. Although the names Microsoft DirectSound and
	Microsoft DirectMusic are still used, there is no longer a clear distinction
	between the two, and it is expected that the DirectMusic APIs will be the APIs
	of choice for creating interactive sound effects.
	
	- The new audio architecture treats the DirectMusic synthesizer as the main
	  sound generator for DirectX Audio. This highly optimized DLS2 synthesizer
	  creates all the sounds, sub-mixes them and sends the result to DirectSound
	  buffers for further processing.
	
	  The DirectSound buffer can apply audio effects processing as well as 3-D
	  positioning on each sound. The DirectMusic synthesizer can also sub-mix
	  multiple individual voices prior to output. This allows several individual
	  sounds to be processed by the same audio effects and positioned in the same
	  location in 3-D space and use only one DirectSound3D buffer, minimizing CPU
	  usage and 3-D hardware requirements.
	
	- DirectMusic Producer will provide authoring capabilities for all new
	  DirectMusic features, as well as some enhancements that do not affect the
	  APIs but allow for a more flexible and comprehensive authoring environment.
	
	New DirectX Graphics features include:
	
	- Migration of Microsoft DirectDraw into Microsoft Direct3D:
	
	  In version 8.0 of DirectX, DirectDraw is fully integrated into Direct3D to
	  enable drastically simplified application initialization, improved data
	  allocation and management performance, and reduced memory footprint.
	
	  The new Direct3D infrastructure provides the services that are called at
	  relatively low frequency.
	
	- Creation of Direct3D.
	
	- Creation of resources such as textures and vertex buffers.
	
	- Display mode selection.
	
	- Presentation of rendered images to the display.
	
	New DirectX 8.0 Graphics features include:
	
	- Parallel vertex input streams for more flexible mapping to dynamic
	  application data structures.
	
	- Programmable vertex processing language enables programmers to write hardware
	  shaders for
	
	   - General environment mapping
	- Matrix palette skinning
	- Morphing/tweening animation
	- Procedural geometry
	- User-defined lighting models
	
	  as well as for any other developer-defined algorithm.
	
	- Programmable Pixel processing language enables programmers to write hardware
	  shaders for
	
	   - Per-pixel environment mapping
	- Per-pixel lighting/bump mapping
	
	  as well as for any other developer-defined algorithm.
	
	- MultiSample Rendering support enables:
	
	   - Full-scene antialiasing
	- Multisample effects such as depth-of-field and motion blur
	
	- Sprite Points enable:
	
	   - High-performance rendering of particle systems
	
	- 3-D Volume textures enable:
	
	   - Easy texturing of very complex geometry
	- Range-attenuation in per-pixel lighting
	- Volume atmospheric effects
	
	- Higher-Order Primitive Support:
	
	   - Enhances the appearance of 3-D content
	- Facilitates the mapping of content from major 3-D authoring tools
	
	- Higher-Level Technologies:
	
	   - 3-D content creation tool plug-ins for export into Direct3D of skinned meshes
	  using a variety of Direct3D techniques such as higher order surface data and
	  multi-resolution LOD geometry
	
	New DirectInput features include:
	
	- DirectInput Mapper, including a default user interface that enables users to
	  configure devices quickly and easily. This standard API is complimented by a
	  low-level user interface API that enables applications to directly access
	  device images for use in their own custom user interfaces.
	
	- Better support for international applications. DirectInput devices in DirectX
	  8.0 support a new property to retrieve the localized key name string for an
	  international keyboard. This feature will be useful to most any
	  DirectInput-based application that ships internationally.
	
	New DirectPlay features include:
	
	- DirectPlay 8 interfaces, IDirectPlay8, represent a rewrite of the DirectPlay
	  layer designed for simplicity, performance, and scalability.
	
	- IDirectPlay 8 is designed to be scalable for the massive multiplayer
	  environment of thousands of users.
	
	- The provision of Voice channels. This is implemented across both the old APIs
	  and the IDirectPlay8 APIs in a single, common interface.
	
	- DirectPlay Voice allows for a voice-prompted user interface.
	
	- DirectPlay Voice provides for multiple topologies: peer to peer,
	  client/server, and client/mixing server.
	
	- A rich suite of low and high bandwidth compression/decompression algorithms
	  are available in support of DirectPlay Voice.
	
	- Takes advantage of I/O completion ports in Windows 2000, increasing the
	  potential number of clients/server, reducing server deployment costs.
	
	- A revised addressing scheme based on URL naming convention to be more
	  intuitive to work with. An additional benefit is allowing for easily-created,
	  one-click game launching from a Web page.
	
	- A simplified API scheme allows easier setup and connection for the developer.
	
	- Thread management implemented to reduce thread count, thus lowering the cost
	  to implement servers.
	
	- The lobby/client dependency is removed, allowing the developer to pick and
	  choose the components that suit the job requirement.
	
	New DirectShow features include:
	
	- A single setup program for graphics, audio and streaming.
	
	- Integrated documentation and samples.
	
	- Easier dependency testing DirectShow-based applications because DirectX 8.0
	  will always be installed.
	
	In addition to the benefits of improved integration, DirectShow 8.0 adds the
	following features:
	
	- Dynamic Graph Building, allowing filter chains to be added and removed from
	  the graph while it is still running.
	
	- Dynamic Format Change support, allowing the graph to reconfigure on the fly
	  for changes in the source data.
	
	- DirectShow Editing Services, a complete timeline and switching system for
	  non-linear editing.
	
	- Improved startup performance and filter caching to reduce enumeration time.
	
	- Improved DVD Support. The DVD Navigator now implements the complete DVD
	  Annex-J command set and can play karaoke as well as video discs. The MSWebDVD
	  ActiveX control enables the development of full-featured scripting-based DVD
	  player applications.
	
	For information about how to download and install DirectX 8.0, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	REFERENCES
	==========
	
	The information in this article was copied directly from the DirectX 8.0 for
	Visual C++ and the DirectX 8.0 for Visual Basic documentation.
	
	Additional query words: msgame direct-x dx8 improvements update versions winme
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbOSWinME kbOSWinSearch
	Version           : :2000
	Issue type        : kbinfo
	
	=============================================================================
	
