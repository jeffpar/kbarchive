---
layout: page
title: "Q126022: Contents of FONTMAP.TXT for Ultimate Haunted House"
permalink: /kb/126/Q126022/
---

## Q126022: Contents of FONTMAP.TXT for Ultimate Haunted House

	Article: Q126022
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbreadme kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Haunted House for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the text of the FONTMAP.TXT for The Ultimate Haunted House.
	
	; Copyright 1994, Macromedia, Inc.  All Rights Reserved.
	;
	;=================================================================
	;
	; Default Font Mapping Table for Director 4.0 Macintosh and Windows.
	;
	; This file provides a font mapping table for Director 4.0 for Windows
	; and Director 4.0.3 for Macintosh.
	;
	; If a copy of this file is in the same folder or directory as the
	; Director application, Director will automatically include this font
	; mapping table in every new movie you create.
	;
	; To add this font mapping table to an existing movie, choose Movie Info
	; from the File menu.  Then click Load from File.  Use the dialog box
	; that appears to locate this file.
	;
	; Note: In this file, a semicolon at the beginning of a line indicates
	; a comment.
	;
	;=================================================================
	;
	; FONT MAPPINGS
	;
	; Font mappings specify which font and size substitutions to make when
	; moving a movie from one platform to another.
	;
	; The format for font mapping definitions is:
	;
	; Platform:FontName => Platform:FontName [MAP NONE] [oldSize => newSize]
	;
	;    Specifying MAP NONE turns off character mapping for this font.
	;    If you specify size mappings, they apply for THAT FONT ONLY.
	;
	; Here are some typical mappings for the standard Macintosh fonts:
	;
	
	Mac:Chicago       => Win:System
	Mac:Courier       => Win:"Courier New"
	Mac:Geneva        => Win:"MS Sans Serif"
	Mac:Helvetica     => Win:Arial
	Mac:Monaco        => Win:Terminal
	Mac:"New York"    => Win:"MS Serif"
	Mac:Symbol        => Win:Symbol  Map None
	Mac:Times         => Win:"Times New Roman" 14=>12 18=>14 24=>18 30=>24
	;
	; Here are some typical mappings for the standard Windows fonts:
	;
	Win:Arial             => Mac:Helvetica
	Win:"Courier"         => Mac:Courier
	Win:"Courier New"     => Mac:Courier
	Win:"MS Serif"        => Mac:"New York"
	Win:"MS Sans Serif"   => Mac:Geneva
	Win:Symbol            => Mac:Symbol  Map None
	Win:System            => Mac:Chicago
	Win:Terminal          => Mac:Monaco
	Win:"Times New Roman" => Mac:"Times" 12=>14 14=>18 18=>24 24=>30
	; Note: When mapping from Windows to Macintosh, Courier and Courier New
	; map onto Courier.  When coming back to Windows only Courier New
	; will be used.
	; Japanese Font Mappings
	;
	; The Macintosh Japanese Osaka font is mapped to a Windows font, and
	; all Windows fonts are mapped to Macintosh's Osaka.  Map None is used
	; because only Roman fonts need upper-ASCII characters mapped.  To prevent
	; mapping of any additional Japanese fonts, add them to this list.
	;
	; Note: If you do not have a Japanese system, the font names below
	; will appear to be unreadable.
	Mac:Osaka=>Win:"W?SVbN" Map None
	Win:"lr SVbN"=>Mac:Osaka Map None
	Win:"lr -3/4'(c)"=>Mac:Osaka Map None
	Win:"W?SVbN"=>Mac:Osaka Map None
	Win:"W?-3/4'(c)"=>Mac:Osaka Map None
	Win:"-3/4'(c)"=>Mac:Osaka Map None
	;=================================================================
	;
	; CHARACTER MAPPINGS
	;
	; Character mapping ensures that characters such as bullets,
	; quote marks, and accented characters always appear correctly
	; when text is moved from one platform to another.  When a
	; character is mapped, a different ASCII value is substituted
	; in order to preserve the appearance of the character.
	;
	; Character mappings are used for all fonts EXCEPT those declared
	; above as Map None.
	;
	; The format for character mappings is:
	;
	; Platform: => Platform:  oldChar => oldChar ...
	;
	; The following table provides a full set of bi-directional
	; mappings for all ASCII values between 128 and 255.
	;
	; Note: Some characters are not available in both character sets.
	; However, the bi-directional mapping table below preserves these
	; characters even if they are mapped to a different platform and
	; later re-mapped back to the original platform.
	Mac: => Win: 128=>196 129=>197 130=>199 131=>201 132=>209 133=>214 134=>220
	Mac: => Win: 135=>225 136=>224 137=>226 138=>228 139=>227 140=>229 141=>231
	Mac: => Win: 142=>233 143=>232 144=>234 145=>235 146=>237 147=>236 148=>238
	Mac: => Win: 149=>239 150=>241 151=>243 152=>242 153=>244 154=>246 155=>245
	Mac: => Win: 156=>250 157=>249 158=>251 159=>252 160=>134 161=>190 162=>162
	Mac: => Win: 163=>163 164=>167 165=>149 166=>182 167=>223 168=>174 169=>169
	Mac: => Win: 170=>153 171=>180 172=>168 173=>141 174=>198 175=>216 176=>144
	Mac: => Win: 177=>177 178=>143 179=>142 180=>165 181=>181 182=>240 183=>221
	Mac: => Win: 184=>222 185=>254 186=>138 187=>170 188=>186 189=>253 190=>230
	Mac: => Win: 191=>248 192=>191 193=>161 194=>172 195=>175 196=>131 197=>188
	Mac: => Win: 198=>208 199=>171 200=>187 201=>133 202=>160 203=>192 204=>195
	Mac: => Win: 205=>213 206=>140 207=>156 208=>173 209=>151 210=>147 211=>148
	Mac: => Win: 212=>145 213=>146 214=>247 215=>215 216=>255 217=>159 218=>158
	Mac: => Win: 219=>164 220=>139 221=>155 222=>128 223=>129 224=>135 225=>183
	Mac: => Win: 226=>130 227=>132 228=>137 229=>194 230=>202 231=>193 232=>203
	Mac: => Win: 233=>200 234=>205 235=>206 236=>207 237=>204 238=>211 239=>212
	Mac: => Win: 240=>157 241=>210 242=>218 243=>219 244=>217 245=>166 246=>136
	Mac: => Win: 247=>152 248=>150 249=>154 250=>178 251=>176 252=>184 253=>189
	Mac: => Win: 254=>179 255=>185
	
	Win: => Mac: 128=>222 129=>223 130=>226 131=>196 132=>227 133=>201 134=>160
	Win: => Mac: 135=>224 136=>246 137=>228 138=>186 139=>220 140=>206 141=>173
	Win: => Mac: 142=>179 143=>178 144=>176 145=>212 146=>213 147=>210 148=>211
	Win: => Mac: 149=>165 150=>248 151=>209 152=>247 153=>170 154=>249 155=>221
	Win: => Mac: 156=>207 157=>240 158=>218 159=>217 160=>202 161=>193 162=>162
	Win: => Mac: 163=>163 164=>219 165=>180 166=>245 167=>164 168=>172 169=>169
	Win: => Mac: 170=>187 171=>199 172=>194 173=>208 174=>168 175=>195 176=>251
	Win: => Mac: 177=>177 178=>250 179=>254 180=>171 181=>181 182=>166 183=>225
	Win: => Mac: 184=>252 185=>255 186=>188 187=>200 188=>197 189=>253 190=>161
	Win: => Mac: 191=>192 192=>203 193=>231 194=>229 195=>204 196=>128 197=>129
	Win: => Mac: 198=>174 199=>130 200=>233 201=>131 202=>230 203=>232 204=>237
	Win: => Mac: 205=>234 206=>235 207=>236 208=>198 209=>132 210=>241 211=>238
	Win: => Mac: 212=>239 213=>205 214=>133 215=>215 216=>175 217=>244 218=>242
	Win: => Mac: 219=>243 220=>134 221=>183 222=>184 223=>167 224=>136 225=>135
	Win: => Mac: 226=>137 227=>139 228=>138 229=>140 230=>190 231=>141 232=>143
	Win: => Mac: 233=>142 234=>144 235=>145 236=>147 237=>146 238=>148 239=>149
	Win: => Mac: 240=>182 241=>150 242=>152 243=>151 244=>153 245=>155 246=>154
	Win: => Mac: 247=>214 248=>191 249=>157 250=>156 251=>158 252=>159 253=>189
	Win: => Mac: 254=>185 255=>216
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbKidsSearch kbHauntedHouse
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
