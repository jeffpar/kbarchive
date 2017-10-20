---
layout: page
title: "Q32095: Exit Does Not Save Files when NoAutosave Is Set"
permalink: /kb/032/Q32095/
---

## Q32095: Exit Does Not Save Files when NoAutosave Is Set

{% raw %}

	Article: Q32095
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 31-OCT-1988
	
	When the boolean switch Autosave is disabled (by setting it to
	NoAutosave), a file will not be saved when exiting the editor.
	
	As documented on Page 61 of the "Microsoft Editor User's Guide," when
	the Autosave switch is turned on, the current file is saved when the
	user switches away from it. When Autosave is off (NoAutosave), the
	file must be explicitly saved when desired; this can be done by
	entering Arg Arg Setfile (ALT+A ALT+A F2 in the default keyboard
	setup).

{% endraw %}
