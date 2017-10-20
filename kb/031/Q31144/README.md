---
layout: page
title: "Q31144: MEP Crashes OS/2 when Switching from Real-Mode Screen Group"
permalink: /kb/031/Q31144/
---

## Q31144: MEP Crashes OS/2 when Switching from Real-Mode Screen Group

{% raw %}

	Article: Q31144
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | TAR75546 TAR76522 | mspl13_basic
	Last Modified: 28-OCT-1988
	
	When running in OS/2 protected mode, the system may crash when
	switching between protected mode and real mode and using the ALT+ESC
	sequence. It may take several iterations of ALT+ESC before the failure
	occurs.
	
	The system crashes when switching from the real-mode session into a
	protected-mode session that is running MEP. When the system crash
	occurs, the following message appears:
	
	    TRAP 000D
	
	    <register contents>
	
	    The system detected an internal processing error
	    at location # 3430:0590
	    Exception while in kernel mode
	
	    The system is stopped
	
	This is not a problem in MEP; it is a problem in OS/2.
	
	You can work around this problem by not running MEP in the original
	("default") protected-mode screen group. Instead, start a second
	protected-mode screen group and run MEP there. To move to the second
	protected-mode screen group, do the following:
	
	1. Press ALT+ESC from real mode to get to the original
	   protected-mode screen group.
	
	2. Press ALT+ESC again to get to the MEP screen group.
	
	Running MEP in a second screen group prevents you from switching
	directly from real mode into the MEP screen group.
	
	Another workaround for this problem is to use the CTRL+ESC hotkey
	rather than the ALT+ESC command to leave the real-mode screen group.
	The CTRL+C hotkey brings you back to the program selector. Once
	there, you can select the next screen group by using the mouse or
	cursor keys.

{% endraw %}
